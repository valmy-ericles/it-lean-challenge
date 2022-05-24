import React from "react"
import Route from "./Route"

import { Switch } from "react-router-dom"

import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  )
}