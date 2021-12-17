import { csrfFetch } from "./csrf.js";

const POST_SONG = "session/PostSongs"
const PUT_SONG = "session/PutSongs";
const GET_SONGS = "session/GetSongs";
const GET_A_SONG = "session/GetASong";
const DELETE_SONG = "session/DeleteSong";

const GetSongs = (data) => {
  return {
    type: GET_SONGS,
    payload: data,
  };
};

const GetASong = (song) => {
  return {
    type:GET_A_SONG,
    payload: song,
  };
};


const AddSongs = (songs) => {
  return {
    type:POST_SONG,
    songs,
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
  const response = await csrfFetch(`/api/${id}/update`, {
    method: "PUT",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const { UpdatedSong } = await response.json();
    dispatch(UpdateSong(UpdatedSong));
  }
};

export const GetOneSong = (id) => async (dispatch) => {
  const response = await fetch(`/api/song/${id}`);

  if (response.ok) {
    const song = await response.json();
    dispatch(GetASong(song));
  }
};

export const UploadASong = (form, song, image) => async (dispatch) => {
  const formData = new FormData()
  if(song) {
      formData.append("song", song)
  };
  if(image){
    formData.append("image", image)
  }

  formData.append('title', form.title)
  formData.append('artist', form.artist)
  formData.append('length', form.length)


  const response = await fetch(`/api/upload`, {
      method: "POST",
      body: formData
  });

  if (response.ok) {
    const songs = await response.json()
    dispatch(AddSongs(songs))
  }

}

export const GetAllSongs = () => async (dispatch) => {
  const response = await csrfFetch(`/api/song`);

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    dispatch(GetSongs(data));
  }
};

export const DeleteASong = (id) => async (dispatch) => {
  const response = await fetch(`/api/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(DeleteSong());
  }
};


const initialState = { songs: [],singleSong:[] };
const SongReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SONGS:
      newState = Object.assign({}, state);
      newState.songs = action.payload.songs;
      return newState;
      case GET_A_SONG:
      newState = Object.assign({}, state);
      newState.singleSong = action.payload.singleSong;
      return newState;
    case DELETE_SONG:
      newState = Object.assign({}, state);
      delete newState[action.songs];
      return newState;
    case POST_SONG:
      newState={...state}
      const songList = newState.songs.map(song => newState[song])
      songList.push(action.songs)
      return newState;
    default:
      return state;
  }
};
export default SongReducer;
