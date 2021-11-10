import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import UploadForm from './components/upload';
import CommentForm from './components/comment';
import Player from './components/player';
import { authenticate } from './store/session';
import { Home } from './components/home';
import { Library } from './components/Library';
import { Discover } from './components/discover';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Home />
        </Route>
        <Route path='/discover' exact={true} >
          <Discover />
        </Route>
        <Route path='/library' exact={true} >
        <Library />
        </Route>
        <Route path='/upload' exact={true} >
          <UploadForm />
        </Route>
        <Route path='/comment' exact={true} >
          <CommentForm />
        </Route>
      </Switch>
      <Player />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
