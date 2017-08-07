import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//CSS
import './MenuAdmin.css'
//react-icons
import MdAddCircle from 'react-icons/lib/md/add-circle'
import MdAccountCircle from 'react-icons/lib/md/account-circle'
import MdAssigment from 'react-icons/lib/md/assignment'

class MenuAdmin extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div id="admin">
        <div id="admin-agregar-tarea">
          <MdAddCircle size={35}/>
          <h2>Agregar Tareas</h2>
        </div>
        <hr className="style14"/>
        <div id="admin-revisar-tarea">
          <MdAccountCircle size={35}/>
          <h2>Revisar Tareas</h2>
        </div>
        <hr className="style14"/>
        <div id="admin-agregar-usuario">
          <MdAssigment size={35}/>
          <h2>Agregar Usuario</h2>
        </div>
      </div>
    )
  }
}
export default MenuAdmin;
