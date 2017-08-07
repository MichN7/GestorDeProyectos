import React from 'react'
import {Switch, Route} from 'react-router-dom'

//Components
import MenuAdmin from './components/Admin/MenuAdmin.js'
import NuevaTareaAdmin from './components/Admin/NuevaTareaAdmin.js'
import RevisarTareaAdmin from './components/Admin/RevisarTareaAdmin.js'
import AgregarUsuarioAdmin from './components/Admin/AgregarUsuarioAdmin.js'

const AdminRoute = () => (
  <Switch>
    <Route exact path='/admin' component={MenuAdmin}/>
    <Route path='/admin/nueva-tarea' component={NuevaTareaAdmin}/>
    <Route path='/admin/revisar-tarea' component={RevisarTareaAdmin}/>
    <Route path='/admin/agregar-usuario' component={AgregarUsuarioAdmin}/>
  </Switch>
)


export default AdminRoute;
