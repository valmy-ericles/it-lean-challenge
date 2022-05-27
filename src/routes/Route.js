import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  isPublicToAll = false,
  ...rest
}) {
  const { auth } = useAuth()
  const logged = auth.token ? true : false

  const currentPath = window.location.pathname
  
  if(currentPath === "/" && logged) return <Route render={ () => <Redirect to="/dashboard" /> } />

  if(isPublicToAll) return <Route {...rest} component={Component} />

  if(!logged && isPrivate) return <Route render={ () => <Redirect to="/" /> } />

  return <Route {...rest} component={Component} />
}