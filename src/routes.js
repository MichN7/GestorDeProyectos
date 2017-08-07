import React from 'react'
import {Switch, Route} from 'react-router-dom'

import MenuAdmin from './components/Admin/MenuAdmin.js'
import Login from './components/Login.js'
import NuevaTareaAdmin from './components/Admin/NuevaTareaAdmin.js'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/admin" component={MenuAdmin}>
      <Route path="/admin/nueva-tarea" component={NuevaTareaAdmin} />
    </Route>
  </Switch>
);

export default Routes;
