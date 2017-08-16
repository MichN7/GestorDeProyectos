import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ref,firebaseAuth} from '../../const.js'
//Route
import AdminRevisarTareaRoutes from './AdminRevisarTareaRoutes.js'

//Components
import MenuAdmin from '../Admin/MenuAdmin.js'
import NuevaTareaAdmin from '../Admin/NuevaTareaAdmin.js'

import AgregarUsuarioAdmin from '../Admin/AgregarUsuarioAdmin.js'

const AdminRoute = () => (
  <Switch>
    <Route exact path='/admin' component={MenuAdmin}/>
    <Route path='/admin/nueva-tarea' component={NuevaTareaAdmin}/>
    <Route path='/admin/revisar-tareas' component={AdminRevisarTareaRoutes}/>
    <Route path='/admin/agregar-usuario' component={AgregarUsuarioAdmin}/>
    <a onClick={() => firebaseAuth().signOut() } href="/admin">Salir</a>
  </Switch>
)


export default AdminRoute;
