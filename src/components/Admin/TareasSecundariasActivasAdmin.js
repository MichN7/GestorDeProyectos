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
  constructor() {
    super()
  }
  handleTouchTap() {
    alert('Click en el Chip!!');
  }
  render(){
    return(
      <div>
        <Chip
          onTouchTap={this.handleTouchTap}
          style={styles.chip}
        >
          Datos aqui
        </Chip>
      </div>
    )
  }
}

class TareasSecundariasActivasAdmin extends Component {
  constructor() {
    super()
    this.state ={
      datosTareaPrincipal:[{nombre:'Hacer Nominas',status:'En proceso'}]
    }
  }
  render(){
    return(
      <div id="tareas-secundaria-activas">
        <h2>Tarea: {this.state.datosTareaPrincipal[0].nombre}</h2>
        <h2>Status: {this.state.datosTareaPrincipal[0].status}</h2>
        <ChipsSecundariasActivas/>
      </div>
    )
  }
}

export default TareasSecundariasActivasAdmin;
