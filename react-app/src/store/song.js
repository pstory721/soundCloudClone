import { csrfFetch } from "./csrf.js";

const POST_SONG = "session/PostSongs"
const PUT_SONG = "session/PutSongs";
const GET_SONGS = "session/GetSongs";
const DELETE_SONG = "session/DeleteSong";

const GetSongs = (data) => {
  return {
    type: GET_SONGS,
    payload: data,
  };
};

const AddSongs = (song) => {
  return {
    type:POST_SONG,
    payload: song,
  }
}

const UpdateSong = (song) => {
  return {
    type: PUT_SONG,
    song,
  };
};

const DeleteSong = () => {
  return {
    type: DELETE_SONG,
  };
};

export const UpdateASong = (input, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/song/${id}`, {
    method: "PUT",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const { UpdatedSong } = await response.json();
    dispatch(UpdateSong(UpdatedSong));
  }
};

export const UploadASong = (input) => async (dispatch) => {
  console.log("this is the file ............ ",input.selectedSong)
  const response = await csrfFetch(`/api/upload`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const { NewSong } = await response.json();
    dispatch(UploadASong(NewSong));
  }
}

export const GetAllSongs = () => async (dispatch) => {
  const response = await csrfFetch(`/api/song`);

  if (response.ok) {
    const data = await response.json();
    dispatch(GetSongs(data));
  }
};

export const DeleteASong = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/song/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(DeleteSong());
  }
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
    case POST_SONG:
      const songList = newState.songs.map(song => newState[song])
      songList.push(action.payload.songs)
      return newState;
    default:
      return state;
  }
};
export default SongReducer;
