from flask import Blueprint, jsonify, request, session, redirect
from flask_login import login_required, current_user
from app.models import Song, db
from app.forms.upload_form import UploadForm, EditSongForm
from app.api.aws_songs import (
    upload_song_to_s3, allowed_song, get_unique_songname)
from app.api.aws_images import (
    upload_file_to_s3, allowed_file, get_unique_filename)

song_routes = Blueprint('songs', __name__)


# # Get all songs from the database
# @song_routes.route("/<int:id>")
# def all_songs(id):
#     songs = Song.query.filter(Song.id==id).all()
#     return {jsonify(songs)}

# Get all songs from the database
# @song_routes.route("/<int:id>")
# def all_songs(id):
#     songs = Song.query.filter(Song.id==id).all()
#     return jsonify(songs)

# Get all songs from the database
@song_routes.route("/song")
def all_songs():
    songs = Song.query.all()
    return {'songs':[song.to_dict() for song in songs ]}

# Post songs to the Database
@song_routes.route("/upload", methods=["POST"])
@login_required
def song_post():
    form = UploadForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if "song" not in request.files:
        return {"errors": "Song required"}, 400

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

    user = current_user.id

    if form.validate_on_submit():
        data = form.data
        new_song = Song(
            user_id=user,
            title=data["title"],
            artist=data["artist"],
            length=data["length"],
            song_url=url_song,
            image_url=url_image
        )
        db.session.add(new_song)
        db.session.commit()
        return redirect("/")

    else:
        return "Bad Data"


# To delete the song from the database


@song_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_song(id):
    current_song = Song["id"]
    if current_song["user_id"] not in current_user:

        return "Cannot complete request", 403
    db.session.delete(current_song)
    return redirect("/")


# Edit the uploaded song file
@song_routes.route('/<int:id>/edit', methods=["PUT"])
@login_required
def edit_song(id):

    current_song = Song[id]
    if current_song["user_id"] not in current_user:
        return "Cannot complete request", 403

    form = EditSongForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        song = Song.query.get(id)
        song.title = form.data['title']
        song.artist = form.data['artist']
        song.length = form.data['length']
        db.session.commit()
        return song.to_dict()
    else:
        return form.errors

    return redirect("/")
