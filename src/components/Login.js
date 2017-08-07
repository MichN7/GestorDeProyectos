import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//css
import './Login.css'

//material-ui components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  title: {
    cursor: 'pointer',
  },
  button:{
    color:'#2C434B'
  }
};

class Login extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div id="login-form">
          <div id="login-mail">
            <h2>Correo</h2>
            <TextField
              underlineFocusStyle={{borderColor: "#DED5B8"}}
            />
          </div>
          <div id="login-password">
            <h2>Contraseña</h2>
            <TextField
              underlineFocusStyle={{borderColor: "#DED5B8"}}
              type="password"
            />
          </div>
          <Link to="admin">
            <RaisedButton label="Aceptar" primary={true}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default Login;
