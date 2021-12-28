import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import SongReducer from './song';
import CommentReducer from './Comments';
import PlaylistReducer from './playlist';
// import session from './session'
import reducer from './session';
import LikeReducer from './likes';

const rootReducer = combineReducers({
  session:reducer,
  songs:SongReducer,
  comment:CommentReducer,
  playlist:PlaylistReducer,
  likes:LikeReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
