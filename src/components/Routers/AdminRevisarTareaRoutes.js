import React from 'react'
import {Switch, Route} from 'react-router-dom'
//component
import RevisarTareaAdmin from '../Admin/RevisarTareaAdmin.js'

import TareasPrincipalesActivasAdmin from '../Admin/TareasPrincipalesActivasAdmin.js'
import TareasPrincipalesRealizadasAdmin from '../Admin/TareasPrincipalesRealizadasAdmin.js'

const AdminRevisarTareaRoutes = () => (
  <Switch>
    <Route exact path='/admin/revisar-tareas' component={RevisarTareaAdmin}/>
    <Route path='/admin/revisar-tareas/tareas-principales-activas' component={TareasPrincipalesActivasAdmin}/>
    <Route path='/admin/revisar-tareas/tareas-principales-realizadas' component={TareasPrincipalesRealizadasAdmin}/>
  </Switch>
)

export default AdminRevisarTareaRoutes;
