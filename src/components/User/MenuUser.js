import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import GoChecklist from 'react-icons/lib/go/checklist'
import GoFileText from 'react-icons/lib/go/file-text'

class MenuUser extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>
      <div id="admin-revisar-tarea">
        <hr className="style14"/>
        <Link to={`/user/tareas-pendients`}>
          <div id="revisar-tareas-activas">
            <GoFileText size={35}/>
            <h2>PENDIENTES</h2>
          </div>
        </Link>
        <hr className="style14"/>
        <Link to={`/user/tareas-realizadas`}>
          <div id="revisar-tareas-realizadas">
            <GoChecklist size={35}/>
            <h2>REALIZADAS</h2>
          </div>
        </Link>
        <hr className="style14"/>
      </div>
      </div>
    )
  }
}

export default MenuUser;
