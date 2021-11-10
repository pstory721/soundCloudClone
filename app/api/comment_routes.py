from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from app.models import Comments, db
from app.forms.comment_form import CommentForm, EditCommentForm

comment_routes = Blueprint('comments', __name__)


# Get all comments from the database
@comment_routes.route("song/<int:id>/")
def all_comments(id):
    comments = Comments.query.filter(Comments.song_id==id).all()
    return jsonify(comments)


# Posts a new comment to the song
@comment_routes.route('/add',methods=["POST"])
@login_required
def post_comment():
    print("stuffs.........")
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("dis be the form yo........",form)
    user = current_user.id
    if form.validate_on_submit():
        data = form.data
        print(data)
        new_comment = Comments(
            user_id = user,
            content = data["content"]
        )
        db.session.add(new_comment)
        db.session.commit()
        return redirect("/")
    else:
        return "Bad Data"


# Delete's a comment made by the user
@comment_routes.route('/<int:id>',methods=["DELETE"])
@login_required

def delete_comment(id):
    current_comment = Comments[id]
    if current_comment["user_id"] not in current_user:

        return "Cannot complete request", 403
    db.session.delete(current_comment)
    return redirect("/")


# Edit comment made by the user
@comment_routes.route('/<int:id>/edit',methods=["PUT"])
@login_required
def edit_comment(id):

    current_comment = Comments[id]
    if current_comment["user_id"] not in current_user:
        return "Cannot complete request", 403

    form = EditCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comments.query.get(id)
        comment.content = form.data["content"]
        db.session.commit()
        return comment.to_dict()
    else:
        return form.errors

    return redirect("/")
