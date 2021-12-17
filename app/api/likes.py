from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from app.models import Likes,Song, db
import json

like_routes = Blueprint('likes', __name__)


@like_routes.route('/like/<int:song_id>/<action>')
@login_required
def like_action(song_id, action):
    song = Song.query.filter_by(id=song_id).first_or_404()
    if action == 'like':
        Likes.like_song(song)
        db.session.commit()
    if action == 'unlike':
        Likes.unlike_post(song)
        db.session.commit()
    return redirect(request.referrer)
