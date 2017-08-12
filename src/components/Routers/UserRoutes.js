import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ref,firebaseAuth} from '../../const.js'
//Route

//Components
import MenuUser from '../User/MenuUser.js'
import TareasPendientesUser from '../User/TareasPendientesUser.js'
import TareasRealizadasUser from '../User/TareasRealizadasUser.js'
import UserTarea from '../User/UserTarea.js'

const UserRoutes = () => (
  <Switch>
    <Route exact path='/user' component={MenuUser}/>
    <Route path='/user/tareas-pendients' component={TareasPendientesUser}/>
    <Route path='/user/tareas-realizadas' component={TareasRealizadasUser}/>
    <Route path='/user/tareaID' component={UserTarea}/>
    <a onClick={() => firebaseAuth().signOut() } href="/user">Salir</a>
  </Switch>
)


export default UserRoutes;
