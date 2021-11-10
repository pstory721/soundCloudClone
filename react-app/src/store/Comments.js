import { csrfFetch } from "./csrf.js";

const POST_COMMENT = "session/PostComments"
const PUT_COMMENT = "session/PutComments";
const GET_COMMENTS = "session/GetComments";
const DELETE_COMMENT = "session/DeleteComments";

const GetComments = (data) => {
  return {
    type: GET_COMMENTS,
    payload: data,
  };
};

const AddComments = (comment) => {
  return {
    type:POST_COMMENT,
    payload: comment,
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
  const response = await csrfFetch(`/api/comments/${id}`, {
    method:"PUT",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const { UpdatedComment } = await response.json();
    dispatch(UpdateComment(UpdatedComment));
  }
}

export const AddAComment = (input) => async (dispatch) => {
  const response = await fetch(`/api/comments`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const { NewComment } = await response.json();
    dispatch(AddComments(NewComment));
  }
}

export const GetAllComments = () => async (dispatch) => {
  const response = await fetch(`/api/comments`);

  if (response.ok) {
    const data = await response.json();
    dispatch(GetComments(data));
  }
};

export const DeleteASong = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${id}`, {
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
      newState.songs = action.payload.songs;
      return newState;
    case DELETE_COMMENT:
      newState = Object.assign({}, state);
      delete newState[action.songs];
      return newState;
    case POST_COMMENT:
      const songList = newState.songs.map(song => newState[song])
      songList.push(action.payload.songs)
      return newState;
    default:
      return state;
  }
};
export default CommentReducer;
