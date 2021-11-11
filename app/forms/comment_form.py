from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class CommentForm(FlaskForm):
    content=TextAreaField("content")
    submit=SubmitField("Submit")

class EditCommentForm(FlaskForm):
    content = TextAreaField("content")
    submit = SubmitField("Submit")
