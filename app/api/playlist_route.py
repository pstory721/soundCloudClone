from flask import Blueprint, redirect
from flask_login import login_required, current_user
from app.models import Playlist, db


playlist_routes = Blueprint('playlist', __name__)


@playlist_routes.route("/playlist")
def all_playlists():
    playlists = Playlist.query.all()
    return {'playlists': [playlist.to_dict() for playlist in playlists]}

@playlist_routes.route("/playlist-join")
def playlists_join():
    playlists_join = Playlist.query.filter(current_user.id == Playlist.user_id)
    return {'playlists': [playlist.to_dict() for playlist in playlists_join]}


# @playlist_routes.route('/<int:id>', methods=["DELETE"])
# @login_required
# def delete_playlist(id):
#     current_playlist = Playlist[id]
#     if current_playlist["user_id"] not in current_user:
#         return "Cannot complete request", 403
#     db.session.delete(current_playlist)
#     return redirect("/")
