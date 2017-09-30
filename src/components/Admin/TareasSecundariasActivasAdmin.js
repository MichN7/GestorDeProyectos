import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {ref,firebaseAuth} from '../../const.js'
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
    
  }

  render(){
    return(
      <div>
        {this.props.datos.map((dato,key)=>{
          return(
            <div id="tareas-secundaria-activas-chips">
            <Link to={`/admin/revisar-tareas/tareaID/`+dato.id}>
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
  constructor({match}) {
    super()
    this.state ={
      datosTareaPrincipal:[{nombre:'', status:''}],
      datosTareasSecundarias:[],
      ruta:`${match.params.id}`,

    }
  }
  componentWillMount(){
    var self=this;
    var arrayDatos=[];
    var user =firebaseAuth.currentUser;
    var userDB = user.email.split('.').join('-');
    var refTareasActuales=ref.child('ingTala/'+userDB+'/tareasActuales');
    var taskName=[{nombre:'',status:''}];
    var promise= new Promise(
      function(resolve,reject){
    refTareasActuales.on('value',snapshot=>{
      snapshot.forEach(function(snapChild){
        if(snapChild.val().id===self.state.ruta){
          console.log(snapChild.val());
          snapChild.forEach(function(snapBaby){//falta status en el json
              console.log(snapBaby.val());
            snapBaby.forEach(function(baby){
              resolve (
                arrayDatos = arrayDatos.concat([{nombre:baby.val().tarea,encargado:baby.val().encargado,id:baby.val().id,status:baby.val().status}]),
                taskName[0].nombre =snapChild.val().tarea,
                taskName[0].status='en proceso'
              );
            })//cierre snapBaby foreach
          })//cierre foreach baby
        }//cierre if
      })//cierre snapChild
    })//cierre  snapshot
  }//cierre function
  )
  promise.then(
    function(){
      self.setState({
        datosTareasSecundarias:arrayDatos,
        datosTareaPrincipal:taskName
      })
    }

  )

  }
  render(){
    return(
      <div id="tareas-secundaria-activas">
        <h2>{this.state.datosTareaPrincipal[0].nombre}</h2>
        <h3>Status: {this.state.datosTareaPrincipal[0].status}</h3>
        <ChipsSecundariasActivas datos={this.state.datosTareasSecundarias} />
      </div>
    )
  }
}

export default TareasSecundariasActivasAdmin;
