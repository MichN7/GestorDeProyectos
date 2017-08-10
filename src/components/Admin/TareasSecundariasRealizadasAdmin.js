import React, {Component} from 'react'

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


class TareasSecundariasRealizadasAdmin extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div id="tareas-secundarias-realizadas">
        Componte Secundarias Realizadas
      </div>
    )
  }
}

export default TareasSecundariasRealizadasAdmin;
