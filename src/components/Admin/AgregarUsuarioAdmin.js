import React, {Component} from 'react'

//material-ui components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

//CSS
import './AgregarUsuarioAdmin.css'

class Usuario extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div id="admin-agregar">
        <div id="admin-agregar-nombre">
          <h2>Nombre(s): </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
          />
        </div>
        <div>
          <h2>Apellido Paterno: </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
          />
        </div>
        <div>
          <h2>Apellido Materno: </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
          />
        </div>
        <div>
          <h2>Correo: </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
            type='mail'
          />
        </div>
        <div>
          <h2>Puesto: </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
          />
        </div>
        <div id='admin-agregar-button'>
          <RaisedButton label="Agregar" primary={true}/>
        </div>
      </div>
    )
  }
}

export default Usuario;
