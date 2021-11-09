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
    type:POST_SONG,
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

const initialState = { comments: [] };
const CommentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SONGS:
      newState = Object.assign({}, state);
      newState.songs = action.payload.songs;
      return newState;
    case DELETE_SONG:
      newState = Object.assign({}, state);
      delete newState[action.songs];
      return newState;
    case POST_SONG:
      const songList = newState.songs.map(song => newState[song])
      songList.push(action.payload.songs)
      return newState;
    default:
      return state;
  }
};
export default CommentReducer;
