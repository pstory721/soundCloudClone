from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField,HiddenField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class CommentForm(FlaskForm):
    song_id=HiddenField("song_id")
    content=TextAreaField("content")
    submit=SubmitField("Submit")

class EditCommentForm(FlaskForm):
    song_id=HiddenField("song_id")
    content = TextAreaField("content")
    submit = SubmitField("Submit")
