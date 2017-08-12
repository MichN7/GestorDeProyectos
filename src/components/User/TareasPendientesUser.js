import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Chip from 'material-ui/Chip';
import './TareasPendientesUser.css'

const styles = {
  chip: {
    width:'100%',
    borderRadius:0,
    borderBottom: 'thick solid white',
    margingLeft:"5%",
    marginRight:"5%"
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class ChipsTareasPendientes extends Component {
  constructor(props) {
    super()
  }

  handleTouchTapChip = () =>{
    alert("Click al chip");
  }

  render(){
    return(
      <div>
        {this.props.datos.map((dato,key)=>{
          return(
            <div id="tareas-pendients-chips">
              <Link to={`/user/tareaID`}>
                <Chip
                  style={styles.chip}
                  key={key}
                  onTouchTap={this.handleTouchTapChip}
                >
                  <div id='chip-tarea-sec-activa'>
                    <h4 id="nueva-tarea-titulo">{dato.nombre}</h4>
                    <h4 className="nueva-tarea-desc"><strong>Encargado: </strong> {dato.encargado}</h4>
                    <h4 className="nueva-tarea-desc"><strong>Status: </strong> {dato.status}</h4>
                  </div>
                </Chip>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

class TareasPendientesUser extends Component {
  constructor() {
    super()
    this.state ={
      datosTareasSecundarias:[{nombre:'Colectar basura',encargado:'José Lopez',status:'En proceso'},
                              {nombre:'Colectar basura',encargado:'José Lopez',status:'En proceso'},
                              {nombre:'Colectar basura',encargado:'José Lopez',status:'En proceso'}]
    }
  }
  render(){
    return(
      <div>
        <div id="tareas-pendientes-user">
          <ChipsTareasPendientes datos={this.state.datosTareasSecundarias}/>
        </div>
      </div>
    )
  }
}

export default TareasPendientesUser;
