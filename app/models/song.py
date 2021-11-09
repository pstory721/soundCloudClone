from .db import db


class Song(db.Model):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    artist = db.Column(db.String)
    length = db.Column(db.Integer)
    likes = db.Column(db.Integer)
    song_url = db.Column(db.String(255))
    image_url = db.Column(db.String(255))

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    users = db.relationship("User", back_populates="songs")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'artist': self.artist,
            'length':self.length,
            'likes': self.likes,
            'song_url':self.song_url,
            'image_url':self.image_url
        }

class Comments(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    song_id = db.Column(db.Integer, db.ForeignKey("songs.id"))
    content = db.Column(db.String)

class Likes(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    song_id = db.Column(db.Integer, db.ForeignKey("songs.id"))

class Playlist(db.Model):
    __tablename__ = 'playlists'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    song_id = db.Column(db.Integer, db.ForeignKey("songs.id"))
    title = db.Column(db.String)