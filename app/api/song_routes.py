from flask import Blueprint, jsonify, request, session, redirect
from flask_login import login_required, current_user
from app.models import Song, db
from app.forms.upload_form import UploadForm, EditSongForm
from app.api.aws_songs import (
    upload_song_to_s3, allowed_song, get_unique_songname)
from app.api.aws_images import (
    upload_file_to_s3, allowed_file, get_unique_filename)
import boto3

song_routes = Blueprint('songs', __name__)

@song_routes.route("/song/<int:id>")
def single_songs(id):
    singleSong = Song.query.filter(Song.id == id).first()
    return {'singleSong':singleSong.to_dict()}

# Get all songs from the database
@song_routes.route("/song")
def all_songs():
    songs = Song.query.all()
    return {'songs':[song.to_dict() for song in songs ]}

# Post songs to the Database
@song_routes.route('/upload', methods=["POST"])
@login_required
def song_post():
    s3 = boto3.client("s3")
    form = UploadForm()
    form['csrf_token'].data = request.cookies['csrf_token']


    print("TESTING +++++++++++++++++++", request.files.to_dict())

    song = request.files["song"]
    print("TESTING -------------------", song)
    song.filename = get_unique_songname(song.filename)
    s3.upload_fileobj(song, 'soundcloudclone', song.filename,
                                ExtraArgs={
                                    'ACL': 'public-read',
                                    'ContentType': song.content_type
                                })
    response = s3.generate_presigned_url('get_object',
                                                Params={'Bucket': 'soundcloudclone',
                                                        'Key': song.filename})
    index = response.index("?")
    url = response[0:index]
    print("This is the song URL ------------ ",url)

    user = current_user.id

    if form.validate_on_submit():
        data = form.data
        new_song = Song(
            user_id=user,
            title=data["title"],
            artist=data["artist"],
            length=data["length"],
            song_url = url,
            # image_url = url_image
        )
        db.session.add(new_song)
        db.session.commit()
        return redirect("/discover")

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
