from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models.db import Song
from forms.upload_form import UploadForm
from api.aws_songs import (
    upload_song_to_s3, allowed_song, get_unique_songname)
from api.aws_images import (
    upload_file_to_s3, allowed_file, get_unique_filename)

song_routes = Blueprint('songs', __name__)


@song_routes.route("/songs/upload", methods=["POST"])
@login_required
def song_post():
    form = UploadForm()

    if "song" not in request.files:
        return {"errors":"Song required"}, 400

    song = request.files["song"]
    song.filename = get_unique_songname(song.filename)
    image = request.files["image"]
    image.filename = get_unique_filename(image.filename)
    upload_song = upload_song_to_s3(song)
    upload_image = upload_file_to_s3

    if "url" not in upload_song or upload_image:
        return upload_song or upload_image, 400

    url_song = upload_song["url"]
    url_image = upload_image["url"]

    if form.validate_on_submit():
        data = form.data
        new_song = Song(
            title=data["title"],
            artist=data["artist"],
            length=data["length"],
            song_url = url_song,
            image_url = url_image
        )
        db.session.add(new_song)
        db.session.commit()
        return redirect("/")

    else:
        return "Bad Data"


@song_routes("/songs")
def all_songs():
    songs = Song.query.all()
    return jsonify(songs)
