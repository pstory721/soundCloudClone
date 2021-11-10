import { csrfFetch } from "./csrf.js";

const PUT_PLAYLIST = "session/PutPlaylist";
const GET_PLAYLIST = "session/GetPlaylist";
const DELETE_PLAYLIST = "session/DeletePlaylist";

const GetPlaylist = (data) => {
  return {
    type: GET_PLAYLIST,
    payload: data,
  };
};

const UpdatePlaylist = (playlist) => {
  return {
    type: PUT_PLAYLIST,
    playlist,
  };
};

const DeletePlaylist = () => {
  return {
    type: DELETE_PLAYLIST,
  };
};

export const UpdateAPlaylist = (input, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/playlist/${id}`, {
    method: "PUT",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const { UpdatedSong } = await response.json();
    dispatch(UpdatePlaylist(UpdatedSong));
  }
};

export const GetAllPlaylist = () => async (dispatch) => {
  const response = await fetch(`/api/playlist`);

  if (response.ok) {
    const data = await response.json();
    dispatch(GetPlaylist(data));
  }
};

export const DeleteAPlaylist = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/playlist/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(DeletePlaylist());
  }
};
const initialState = { playlist: [] };
const PlaylistReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_PLAYLIST:
      newState = Object.assign({}, state);
      newState.playlist = action.payload.playlist;
      return newState;
    case DELETE_PLAYLIST:
      newState = Object.assign({}, state);
      delete newState[action.playlist];
      return newState;
    default:
      return state;
  }
};
export default PlaylistReducer;
