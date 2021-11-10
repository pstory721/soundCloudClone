from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,SubmitField


class Uploadplaylist(FlaskForm):

    user_id=IntegerField("Title")
    song_id=IntegerField("Artist")
    title=StringField("Length")
    submit=SubmitField("Submit")
