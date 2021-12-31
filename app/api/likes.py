from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from app.models import Likes,Song, db
import json

like_routes = Blueprint('likes', __name__)

@like_routes.route('/all-song/<int:id>')
def all_likes_for_a_song(id):
	likes = Likes.query.filter(Likes.song_id == id)
	return jsonify([like.to_dict() for like in likes])


@like_routes.route('/all-user/<int:id>')
def all_likes_for_a_user(id):
	likes = Likes.query.filter(Likes.user_id == id)
	return jsonify([like.to_dict() for like in likes])


@like_routes.route('/like/<int:song_id>/<action>', methods=["POST","DELETE"])
@login_required
def like_action(song_id, action):
    likes = Likes.query.all()
    s = Song()
    songs =s.query.filter_by(id=song_id).first()
    # song = Song.query.filter_by(id=song_id
    if action == 'like':
        Likes.like_song(Likes,songs)
        db.session.commit()
    if action == 'unlike':
        Likes.unlike_song(Likes,songs)
        db.session.commit()
    return jsonify([like.to_dict() for like in likes])

