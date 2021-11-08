import {csrfFetch} from './csrf';

const GET_SONGS= 'session/GetSongs';
const PUT_SONG= 'session/PutSongs';



const GetSongs = (data) => {
    return {
      type: GET_SONGS,
       payload:data
    };
  };

  const UpdateSong = (song) => {
    return {
      type: PUT_SONG,
      song,
    };
  };

export const UpdateASong = (input, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`,{
      method: 'PUT',
      body: JSON.stringify(input),
      headers: {"Content-Type": "application/json"},
    });
    if(response.ok){
      const {UpdatedSong} = await response.json();
      dispatch(UpdateSong(UpdatedSong))
    }
  };

export const GetAllSongs = () => async (dispatch) => {
  const response = await fetch(`/api/home`);

  if (response.ok) {
    const data = await response.json();
    dispatch(GetSongs(data));
  }
};

const initialState = { songs:[] };
const SongReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case GET_SONGS:
        newState = Object.assign({}, state);
        newState.songs = action.payload.songs
        return newState
      case PUT_SONG:
        newState = Object.assign({}, state);
        newState.song = action.song;
        return newState;
        default:
        return state;
    }
  };
export default SongReducer
