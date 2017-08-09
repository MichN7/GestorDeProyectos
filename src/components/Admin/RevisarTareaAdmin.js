import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './RevisarTareaAdmin.css'

//react-icons
import GoChecklist from 'react-icons/lib/go/checklist'
import GoFileText from 'react-icons/lib/go/file-text'

class Tareas extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div id="admin-revisar-tarea">
        <hr className="style14"/>
        <Link to={`/admin/revisar-tareas/tareas-principales-activas`}>
          <div id="revisar-tareas-activas">
            <GoChecklist size={35}/>
            <h2>ACTIVAS</h2>
          </div>
        </Link>
        <hr className="style14"/>
        <Link to={`/admin/revisar-tareas/tareas-principales-realizadas`}>
          <div id="revisar-tareas-realizadas">
            <GoFileText size={35}/>
            <h2>REALIZADAS</h2>
          </div>
        </Link>
        <hr className="style14"/>
      </div>
    )
  }
}

export default Tareas;
