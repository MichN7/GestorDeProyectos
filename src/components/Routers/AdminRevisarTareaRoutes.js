import React from 'react'
import {Switch, Route} from 'react-router-dom'
//component
import RevisarTareaAdmin from '../Admin/RevisarTareaAdmin.js'

import TareasPrincipalesActivasAdmin from '../Admin/TareasPrincipalesActivasAdmin.js'
import TareasPrincipalesRealizadasAdmin from '../Admin/TareasPrincipalesRealizadasAdmin.js'

import TareasSecundariasRealizadasAdmin from '../Admin/TareasSecundariasRealizadasAdmin.js'
import TareasSecundariasActivasAdmin from '../Admin/TareasSecundariasActivasAdmin.js'

import AdminTarea from '../Admin/AdminTarea.js'

const AdminRevisarTareaRoutes = () => (
  <Switch>
    <Route exact path='/admin/revisar-tareas' component={RevisarTareaAdmin}/>
    <Route path='/admin/revisar-tareas/tareas-principales-activas' component={TareasPrincipalesActivasAdmin}/>
    <Route path='/admin/revisar-tareas/tareas-principales-realizadas' component={TareasPrincipalesRealizadasAdmin}/>
    <Route path='/admin/revisar-tareas/tareas-secundaria-activas/:id' component={TareasSecundariasActivasAdmin} />
    <Route path='/admin/revisar-tareas/tareas-secundaria-realizadas' component={TareasSecundariasRealizadasAdmin} />
    <Route path='/admin/revisar-tareas/tareaID/:id' component={AdminTarea} />
  </Switch>
)

export default AdminRevisarTareaRoutes;
