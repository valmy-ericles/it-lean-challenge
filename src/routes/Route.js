import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  isPublicToAll = false,
  ...rest
}) {
  const logged = false;
  // const { logged } = store.getState().auth
  // const currentPath = window.location.pathname

  if(isPublicToAll) return <Route {...rest} component={Component} />
  
  if(!logged && isPrivate) return <Route render={ () => <Redirect to="/login" /> } />

  return <Route {...rest} component={Component} />
}