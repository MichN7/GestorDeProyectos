import React, {Component} from 'react'
import {Link} from 'react-router-dom'

//CSS
import './MenuAdmin.css'
//react-icons
import MdAddCircle from 'react-icons/lib/md/add-circle'
import MdAccountCircle from 'react-icons/lib/md/account-circle'
import MdAssigment from 'react-icons/lib/md/assignment'

const MenuAdmin = () => (
  <div id="admin">
    <Link to={`/admin/nueva-tarea`}>
      <div id="admin-agregar-tarea">
        <MdAddCircle size={35}/>
        <h2>Agregar Tareas</h2>
      </div>
    </Link>
    <hr className="style14"/>
    <Link to={`/admin/revisar-tareas`}>
      <div id="admin-revisar-tarea">
        <MdAssigment size={35}/>
        <h2>Revisar Tareas</h2>
      </div>
    </Link>
    <hr className="style14"/>
    <Link to={`/admin/agregar-usuario`}>
      <div id="admin-agregar-usuario">
        <MdAccountCircle size={35}/>
        <h2>Agregar Usuario</h2>
      </div>
    </Link>
  </div>
)


export default MenuAdmin;
