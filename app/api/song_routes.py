from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

song_routes = Blueprint('songs', __name__)

@song_routes.route("/songs/upload",methods=["POST"])
@login_required
def song_post():
    form = UploadForm()
    if form.validate_on_submit():
        data = form.data
        new_song = song(
            title=data["title"],
            artist=data["artist"],
            length=data["length"],
        )
        db.session.add(new_song)
        db.session.commit()
        return redirect("/")
    else:
        return "Bad Data"
