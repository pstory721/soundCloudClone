const GET_SONGS= 'session/GetSongs';

const GetSongs = (data) => {
    return {
      type: GET_SONGS,
       payload:data
    };
  };


export const GetSongs = () => async (dispatch) => {
  const response = await fetch(`/api/home`);

  if (response.ok) {
    const data = await response.json();
    dispatch(GetSongs(data));
  }
};const initialState = { songs:[] };
const SongReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case GET_SONGS:
        newState = Object.assign({}, state);
        newState.songs = action.payload.songs
        return newState
        default:
        return state;
    }
  };
export default SongReducer
