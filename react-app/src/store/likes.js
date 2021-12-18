import { csrfFetch } from "./csrf.js";

const POST_LIKE = "session/PostLikes"
const GET_LIKES = "session/GetLikes";
const GET_A_LIKE = "session/GetALike";
const DELETE_LIKE = "session/DeleteLikes";

const GetLikes = (likes) => {
  return {
    type: GET_LIKES,
    payload: likes,
  };
};

const GetALike = (like) => {
  return {
    type:GET_A_LIKE,
    payload: like,
  };
};


const AddLikes = (likes) => {
  return {
    type:POST_LIKE,
    likes,
  }
}

const DeleteLike = (like) => {
  return {
    type: DELETE_LIKE,
    like
  };
};


export const GetOneUsersLikes = (id) => async (dispatch) => {
  const response = await fetch(`/api/all-user/${id}`);

  if (response.ok) {
    const like = await response.json();
    dispatch(GetALike(like));
  }
};

export const UploadALike = (song_id,action) => async (dispatch) => {
  const response = await fetch(`/api/like${song_id}/${action}`, {
      method: "POST",

  });

  if (response.ok) {
    const likes = await response.json()
    dispatch(AddLikes(likes))
  }

}

export const GetASongsLikes = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/all-song/${id}`);

  if (response.ok) {
    const likes = await response.json();
    dispatch(GetLikes(likes));
  }
};

export const DeleteALike = (song_id,action) => async (dispatch) => {
  const response = await fetch(`/api/like/${song_id}/${action}`, {
    method: "DELETE",
  });
  if (response.ok) {
    const like = await response.json()
    dispatch(DeleteLike(like));
  }
};


const initialState = { userLikes: [],songLikes:[] };
const LikeReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_LIKES:
      newState = Object.assign({}, state);
      newState.songLikes = action.payload.likes;
      return newState;
      case GET_A_LIKE:
      newState = Object.assign({}, state);
      newState.userLikes = action.payload.like;
      return newState;
    case DELETE_LIKE:
        newState = Object.assign({}, state);
        newState.songLikes = state.songLikes.filter(({ id }) => id !== action.like);
        return newState;
    case POST_LIKE:
        return { ...state, songLikes: [...state.songLikes, action.likes] };
    default:
      return state;
  }
};
export default LikeReducer;
