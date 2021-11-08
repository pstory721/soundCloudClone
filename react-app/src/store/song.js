import { csrfFetch } from "./csrf";

const GET_SONGS = "session/GetSongs";
const DELETE_SONG = "session/DeleteSong";
const GetSongs = (data) => {
  return {
    type: GET_SONGS,
    payload: data,
  };
};
const DeleteSong = () => {
  return {
    type: DELETE_SONG,
  };
};

export const GetSongs = () => async (dispatch) => {
  const response = await fetch(`/api/home`);

  if (response.ok) {
    const data = await response.json();
    dispatch(GetSongs(data));
  }

  export const DeleteASong = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(DeleteSong());
    }
  };
};
const initialState = { songs: [] };
const SongReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
export default SongReducer;
