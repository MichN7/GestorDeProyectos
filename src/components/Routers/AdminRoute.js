import React from 'react'
import {Switch, Route} from 'react-router-dom'

//Components
import MenuAdmin from '../Admin/MenuAdmin.js'
import NuevaTareaAdmin from '../Admin/NuevaTareaAdmin.js'
import RevisarTareaAdmin from '../Admin/RevisarTareaAdmin.js'
import AgregarUsuarioAdmin from '../Admin/AgregarUsuarioAdmin.js'

const AdminRoute = () => (
  <Switch>
    <Route exact path='/admin' component={MenuAdmin}/>
    <Route path='/admin/nueva-tarea' component={NuevaTareaAdmin}/>
    <Route path='/admin/revisar-tarea' component={RevisarTareaAdmin}/>
    <Route path='/admin/agregar-usuario' component={AgregarUsuarioAdmin}/>
  </Switch>
)


export default AdminRoute;
