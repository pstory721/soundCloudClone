from .db import db
from flask_login import login_required, current_user

class Song(db.Model):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    artist = db.Column(db.String)
    length = db.Column(db.Integer)
    likes = db.Column(db.Integer)
    index = db.Column(db.Integer)
    song_url = db.Column(db.String(255))
    image_url = db.Column(db.String(255))

    playlist_joins = db.relationship("Playlist_Join", cascade="all, delete")
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    users = db.relationship("User", back_populates="songs")
    comments = db.relationship('Comments', back_populates='songs',cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'artist': self.artist,
            'length': self.length,
            'likes': self.likes,
            'index':self.index,
            'song_url': self.song_url,
            'image_url': self.image_url,
            'user_id': self.user_id
        }


class Comments(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    users = db.relationship("User", back_populates="comments")
    song_id = db.Column(db.Integer, db.ForeignKey("songs.id"))
    songs = db.relationship('Song', back_populates='comments')

    content = db.Column(db.String)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'song_id': self.song_id,
            'content': self.content,
        }


class Likes(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    song_id = db.Column(db.Integer, db.ForeignKey("songs.id"))

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'song_id': self.song_id
        }

    def like_song(self, song):
        if not self.has_liked_post(song):
            like = Likes(user_id=current_user.id, song_id=song.id)
            db.session.add(like)

    def has_liked_post(self, song):
        return Likes.query.filter(
            Likes.user_id == current_user.id,
            Likes.song_id == song.id).count() > 0

    def unlike_post(self, song):
        if self.has_liked_post(song):
            Likes.query.filter_by(
                user_id=current_user.id,
                song_id=song.id).delete()


class Playlist_Join(db.Model):
    __tablename__ = 'playlist_join'

    id = db.Column(db.Integer, primary_key=True)
    song_id = db.Column(db.Integer, db.ForeignKey("songs.id" ,ondelete="CASCADE"))
    playlist_id = db.Column(db.Integer, db.ForeignKey("playlists.id"))

    def to_dict(self):
        return {
            'id': self.id,
            'song_id': self.song_id,
            'playlist_id': self.playlist_id
        }

class Playlist(db.Model):
    __tablename__ = 'playlists'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    title = db.Column(db.String)
    songs = db.relationship("Song", secondary=Playlist_Join.__table__)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'content': self.title,
            'songs': [song.to_dict() for song in self.songs],
        }
