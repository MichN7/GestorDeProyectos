import React, {Component} from 'react'

//material ui components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './AdminTarea.css'

const styles = {
  button: {
    color:'#2C434B',
    marginBottom:'5%'
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
    width:'100%',
  },
};

class AdminTarea extends Component{
  constructor() {
    super()
    this.state = {
      arregloArchivos : [],
      file: '',
      filePreviewUrl: [],
      arrayPreview:[],
      arrayNames:[],
      arrayInfoTareaSecundaria:[{tarea:"Hacer Nominas", descripcion:"Anotarlas con letra clara.",notas:"blablabalbalbablabla",file:"loga.pdf",status:"En proceso"}],
    }
  }
  render(){
    return(
      <div id="admin-tarea">
        <h2><strong> Tarea: </strong> {this.state.arrayInfoTareaSecundaria[0].tarea}</h2>
        <h2><strong> Descripcion: </strong> {this.state.arrayInfoTareaSecundaria[0].descripcion}</h2>
        <h2><strong> Notas: </strong> {this.state.arrayInfoTareaSecundaria[0].notas}</h2>
        <div id="admin-tarea-evidencia">
          <h2><strong> Evidencia: </strong></h2>
          <h2><a href="#">{this.state.arrayInfoTareaSecundaria[0].file}</a></h2>
        </div>
        <h2><strong> Status: </strong> {this.state.arrayInfoTareaSecundaria[0].status}</h2>
        <div id="admin-tarea-button">
            <RaisedButton label="Recibido" primary={true}/>
        </div>
      </div>
    )
  }
}

export default AdminTarea;
