import React, {Component} from 'react'
import {ref,firebaseAuth} from '../../const.js'
//material ui components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

//react-icons
import MdGetApp from 'react-icons/lib/md/get-app'

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
  constructor({match}) {
    super()
    this.state = {
      arregloArchivos : [],
      file: '',
      filePreviewUrl: [],
      arrayPreview:[],
      arrayNames:[],
      ruta:`${match.params.id}`,
      arrayInfoTareaSecundaria:[{tarea:"", descripcion:"",notas:"",file:"",status:""}],
    }
  }

  componentWillMount(){
    var self=this;
    var arrayDatos=[];
    var user =firebaseAuth.currentUser;
    var userDB = user.email.split('.').join('-');
    var refTareasActuales=ref.child('ingTala/'+userDB+'/tareasActuales');
    var promise= new Promise(
      function(resolve,reject){
    refTareasActuales.on('value',snapshot=>{
      snapshot.forEach(function(snapChild){
          console.log(snapChild.val());
          snapChild.forEach(function(snapBaby){//falta status en el json
              console.log(snapBaby.val());
            snapBaby.forEach(function(baby){
                if(baby.val().id===self.state.ruta){
              resolve (arrayDatos= arrayDatos.concat([{nombre:baby.val().tarea,descripcion:baby.val().descripcion,notas:baby.val().fecha,status:baby.val().status}]));
            }
            })//cierre snapBaby foreach
          })//cierre foreach baby

      })//cierre snapChild
    })//cierre  snapshot
  }//cierre function
  )
  promise.then(
    function(){
      self.setState({
        arrayInfoTareaSecundaria:arrayDatos
      })
    }

  )
  }
  render(){
    return(
      <div id="admin-tarea">
        <h2><strong> Tarea: </strong> {this.state.arrayInfoTareaSecundaria[0].nombre}</h2>
        <h2><strong> Descripcion: </strong> {this.state.arrayInfoTareaSecundaria[0].descripcion}</h2>
        <h2><strong> Fecha: </strong> {this.state.arrayInfoTareaSecundaria[0].notas}</h2>
        <div id="admin-tarea-evidencia">
          <h2><strong> Evidencia: </strong></h2>
          <h2><a href="#">{this.state.arrayInfoTareaSecundaria[0].file}<MdGetApp /></a></h2>
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
