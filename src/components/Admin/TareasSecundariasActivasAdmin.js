import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//CSS
import './TareasSecundariasActivasAdmin.css'

//material-ui components
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    width:'100%',
    borderRadius:0,
    borderBottom: 'thick solid white',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


class ChipsSecundariasActivas extends Component {
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
            <div id="tareas-secundaria-activas-chips">
            <Link to={`/admin/revisar-tareas/tareaID`}>
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

class TareasSecundariasActivasAdmin extends Component {
  constructor() {
    super()
    this.state ={
      datosTareaPrincipal:[{nombre:'Realizar proyecto ambiental',status:'En proceso'}],
      datosTareasSecundarias:[{nombre:'Colectar basura',encargado:'José Lopez',status:'En proceso'},
                              {nombre:'Colectar basura',encargado:'José Lopez',status:'En proceso'},
                              {nombre:'Colectar basura',encargado:'José Lopez',status:'En proceso'}]
    }
  }
  render(){
    return(
      <div id="tareas-secundaria-activas">
        <h2>{this.state.datosTareaPrincipal[0].nombre}</h2>
        <h3>Status: {this.state.datosTareaPrincipal[0].status}</h3>
        <ChipsSecundariasActivas datos={this.state.datosTareasSecundarias}/>
      </div>
    )
  }
}

export default TareasSecundariasActivasAdmin;
