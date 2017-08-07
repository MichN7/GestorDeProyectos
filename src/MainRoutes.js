import React from 'react'
import {Switch, Route} from 'react-router-dom'

import AdminRoute from './AdminRoute.js'
import Login from './components/Login.js'
import NuevaTareaAdmin from './components/Admin/NuevaTareaAdmin.js'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/admin" component={AdminRoute}/>
  </Switch>
);

export default Routes;
