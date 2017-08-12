import React, {Component} from 'react'
import {ref,firebaseAuth} from '../../const.js'
//material-ui components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

//CSS
import './AgregarUsuarioAdmin.css'

class Usuario extends Component {
  constructor() {
    super()
  }
  componentWillMount(){


  }
  altaUsuario=(e)=>{
    e.preventDefault();
    var valores=e.target;
    this.registrar(valores.email.value,valores.pass.value);
    var user =firebaseAuth.currentUser;
    var userDB = user.email.split('.').join('-');
    var refAddUsers=ref.child('ingTala/'+userDB+'/usuarios');
    var refPush=refAddUsers.push();

    refPush.set({
      nombre:valores.nombre.value,
      apellidoP:valores.apellidoP.value,
      apellidoM:valores.apellidoM.value,
      email:valores.email.value,
      password:valores.pass.value,
      puesto:valores.puesto.value
    })
      alert('listo');
  }
  registrar(email,password){
    firebaseAuth.createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});
  }
  render(){
    return(
      <div id="admin-agregar">
      <form onSubmit={this.altaUsuario} method="post">
        <div id="admin-agregar-nombre">
          <h2>Nombre(s): </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
            name='nombre'
            required
          />
        </div>
        <div>
          <h2>Apellido Paterno: </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
            name='apellidoP'
            required
          />
        </div>
        <div>
          <h2>Apellido Materno: </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
            name='apellidoM'
            required
          />
        </div>
        <div>
          <h2>Correo: </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
            type='mail'
            name='email'
             required
          />
        </div>
        <div>
          <h2>Password: </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
            type='password'
            name='pass'
            required
          />
        </div>
        <div>
          <h2>Puesto: </h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
            name='puesto'
            required
          />
        </div>
        <div id='admin-agregar-button'>
          <RaisedButton label="Agregar" primary={true}
          type='Submit'
          />
        </div>
        </form>
      </div>
    )
  }
}

export default Usuario;
