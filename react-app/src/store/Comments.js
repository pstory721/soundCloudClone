import { csrfFetch } from "./csrf.js";

const POST_COMMENT = "session/PostComments"
const PUT_COMMENT = "session/PutComments";
const GET_COMMENTS = "session/GetComments";
const DELETE_COMMENT = "session/DeleteComments";

const GetComments = (comments) => {
  return {
    type: GET_COMMENTS,
    comments,
  };
};

const AddComments = (comment) => {
  return {
    type:POST_COMMENT,
    comment,
  }
}

const UpdateComment = (comment) => {
  return {
    type: PUT_COMMENT,
    comment,
  };
};

const DeleteComment = () => {
  return {
    type: DELETE_COMMENT,
  };
};

export const UpdateAComment = (input, id) => async (dispatch) => {
  let item = parseInt(id.comment_id);
  const response = await csrfFetch(`/api/${item}/edit`, {
    method:"PUT",
    body: JSON.stringify(input),
  });

  if (response.ok) {
    const { UpdatedComment } = await response.json();
    dispatch(UpdateComment(UpdatedComment));
  }
}

export const AddAComment = (form) => async (dispatch) => {
  const formData = new FormData()
  formData.append('content', form.content)
  formData.append("song_id",form.songId)

  const response = await fetch(`/api/add`, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    const NewComment  = await response.json();
    dispatch(AddComments(NewComment));
  }
}

export const GetAllComments = (id) => async (dispatch) => {
  const response = await fetch(`/api/get/${id}`);

  if (response.ok) {
    const comments = await response.json();
    dispatch(GetComments(comments));
  }
};

export const DeleteAComment = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/destroy/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(DeleteComment());
  }
};

const initialState = { comments: [] };
const CommentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = Object.assign({}, state);
      newState.comments = action.comments;
      return newState;
    case DELETE_COMMENT:
      newState = Object.assign({}, state);
      delete newState[action.comments];
      return newState;
    case POST_COMMENT:
      case POST_COMMENT:
        return { ...state, comments: [...state.comments, action.comment] };
    default:
      return state;
  }
};
export default CommentReducer;
