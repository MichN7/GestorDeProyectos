import React, {Component} from 'react'
import {ref,firebaseAuth} from '../../const.js'
//material ui components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase'

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
      arrayInfoTareaSecundaria:[{tarea:"", descripcion:"",notas:"",file:"",status:"",encargado:""}],
      encargadoUser:"",
      notas:"",
    }
  }

  componentWillMount(){
    var self=this;
    var arrayDatos=[];
    var user =firebaseAuth.currentUser;
    var userDB = user.email.split('.').join('-');
    var refTareasActuales=ref.child('ingTala/'+userDB+'/tareasActuales');
    let count = 0;
    let countTwo = 0;
    var promise= new Promise(
      function(resolve,reject){
    refTareasActuales.on('value',snapshot=>{
      snapshot.forEach(function(snapChild){
          self.setState({
            keyTareaPrimeraAdmin: snapChild.key,
          })
          snapChild.forEach(function(snapBaby){//falta status en el json
            if(countTwo == 0){
              self.setState({
                keyTareaSegundaAdmin: snapBaby.key,
              });
              countTwo = 1;
            }
            snapBaby.forEach(function(baby){
                if(baby.val().id===self.state.ruta){
                  if(count == 0){
                      self.setState({
                        keyTareaTerceraAdmin: baby.key,
                      })
                      count = 1;
                  }
                  resolve (arrayDatos= arrayDatos.concat([{nombre:baby.val().tarea,descripcion:baby.val().descripcion,notas:baby.val().fecha,status:baby.val().status, id:baby.val().id,encargado:baby.val().encargado}]));
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
          arrayInfoTareaSecundaria:arrayDatos,

        })
        let user = self.state.arrayInfoTareaSecundaria[0].encargado;
        let userBD = user.split('.').join('-');
        let referencia = ref.child('ingTala/'+userBD+'/tareasPendientes');
        referencia.on('value',snapshot =>{
          snapshot.forEach(snapChild=>{
            self.setState({
              keyTareaPrimeraUser: snapChild.key,
            })
            snapChild.forEach(snapBaby=>{
              self.setState({
                keyTareaSegundaUser:snapBaby.key,
                encargadoUser:user,
              })
            })
          })
        })
      }

    )
  }

  handleChangeNotas = (event) => {
     this.setState({
       notas:event.target.value
     });
   }

  onIncomplete(encargadoUser){
    let user = encargadoUser;
    let userBD = user.split('.').join('-');
    let self = this;
    var admin =firebaseAuth.currentUser;
    var adminBD = admin.email.split('.').join('-');
    var refDB= firebase.database().ref('ingTala/'+userBD+'/tareasPendientes/'+this.state.keyTareaPrimeraUser+'/'+this.state.keyTareaSegundaUser+'/');
    var refDBadmin = firebase.database().ref('ingTala/'+adminBD+'/tareasActuales/'+this.state.keyTareaPrimeraAdmin+'/'+this.state.keyTareaSegundaAdmin+'/'+ this.state.keyTareaTerceraAdmin+'/');
    refDB.update({
      status:"Incompleto",
      notasAdmin: self.state.notas,
    });
    refDBadmin.update({
      status:"Incompleto",
      notasAdmin:self.state.notas,
    })
  }

  onReceived(encargadoUser){
    let user = encargadoUser;
    let userBD = user.split('.').join('-');
    let self = this;
    var admin =firebaseAuth.currentUser;
    var adminBD = admin.email.split('.').join('-');
    var refDB= firebase.database().ref('ingTala/'+userBD+'/tareasPendientes/'+this.state.keyTareaPrimeraUser+'/'+this.state.keyTareaSegundaUser+'/');
    var refDBadmin = firebase.database().ref('ingTala/'+adminBD+'/tareasActuales/'+this.state.keyTareaPrimeraAdmin+'/'+this.state.keyTareaSegundaAdmin+'/'+ this.state.keyTareaTerceraAdmin+'/');
    refDB.update({
      status:"Recibido",
      notasAdmin: self.state.notas,
    });
    refDBadmin.update({
      status:"Recibido",
      notasAdmin:self.state.notas,
    })
  }

  onComplete(encargadoUser){
    let user = encargadoUser;
    let userBD = user.split('.').join('-');
    let self = this;
    var admin =firebaseAuth.currentUser;
    var adminBD = admin.email.split('.').join('-');
    var refDB= firebase.database().ref('ingTala/'+userBD+'/tareasPendientes/'+this.state.keyTareaPrimeraUser+'/'+this.state.keyTareaSegundaUser+'/');
    var refDBadmin = firebase.database().ref('ingTala/'+adminBD+'/tareasActuales/'+this.state.keyTareaPrimeraAdmin+'/'+this.state.keyTareaSegundaAdmin+'/'+ this.state.keyTareaTerceraAdmin+'/');
    refDB.update({
      status:"Completado",
      notasAdmin: self.state.notas,
    });
    refDBadmin.update({
      status:"Completado",
      notasAdmin:self.state.notas,
    })
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
        <h2><strong>Notas: </strong> </h2>
        <TextField
          style={styles.dialog}
          underlineFocusStyle={{borderColor: "#DED5B8"}}
          multiLine={true}
          rows={2}
          rowsMax={4}
          onChange={this.handleChangeNotas}
        />
        <div id="admin-tarea-button">
            <RaisedButton label="Recibido" primary={true} onClick={() => this.onReceived(this.state.encargadoUser)}/>
            <RaisedButton label="Incompleto" primary={true} onClick={() => this.onIncomplete(this.state.encargadoUser)}/>
            <RaisedButton label="Completo" primary={true} onClick={() => this.onComplete(this.state.encargadoUser)}/>
        </div>
      </div>
    )
  }
}

export default AdminTarea;
