from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,SubmitField, FileField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class UploadForm(FlaskForm):
    
    title=StringField("Title")
    artist=StringField("Artist")
    length=IntegerField("Length")
    song_url=FileField("Upload Song")
    image_url=FileField("Upload Image")
    submit=SubmitField("Submit")


class EditSongForm(FlaskForm):

    title=StringField("Title")
    artist=StringField("Artist")
    length=IntegerField("Length")
    song_url=StringField("Upload Song")
    image_url=StringField("Upload Image")
    submit=SubmitField("Submit")
