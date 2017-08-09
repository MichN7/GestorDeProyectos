import React, {Component} from 'react'
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    width:'100%',
    borderRadius:0
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

  render(){
    return(
      <div>
        {this.props.datos.map((dato,key)=>{
          <Chip
            style={styles.chip}
            key={key}
          >
            <div id='chip-tarea-sec-activa'>
              <h4 id="nueva-tarea-titulo">{dato.tarea}</h4>
              <hr className="style14"/>
              <h4 className="nueva-tarea-desc"><strong>Encargado: </strong> {dato.encargado}</h4>
              <h4 className="nueva-tarea-desc"><strong>Status: </strong> {dato.status}</h4>
            </div>
          </Chip>
        })}
      </div>
    )
  }
}

class TareasSecundariasActivasAdmin extends Component {
  constructor() {
    super()
    this.state ={
      datosTareaPrincipal:[{nombre:'Realizar proyecto ambiental',status:'En proceso'}]
      datosTareasSecundarias:[{nombre:'Colectar basura',encargado:'José Lopez',status:'En proceso'},
                              {nombre:'Colectar basura',encargado:'José Lopez',status:'En proceso'},
                              {nombre:'Colectar basura',encargado:'José Lopez',status:'En proceso'}]
    }
  }
  render(){
    return(
      <div id="tareas-secundaria-activas">
        <h2>Tarea: {this.state.datosTareaPrincipal[0].nombre}</h2>
        <h2>Status: {this.state.datosTareaPrincipal[0].status}</h2>
        <ChipsSecundariasActivas datos={this.state.datosTareasSecundarias}/>
      </div>
    )
  }
}

export default TareasSecundariasActivasAdmin;
