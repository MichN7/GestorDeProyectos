import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {ref,firebaseAuth} from '../../const.js'
//css
import './TareasPrincipalesActivasAdmin.css'

//material-ui components
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';



class ItemTareaActiva extends Component{
  constructor(props) {
    super()
  }
  state={
    id:'dsjskdf'
  }

  render(){
    return(
      <div className="tareas-principales-items">
        {this.props.datos.map((dato,key) =>{
          return(
            <div>
              <Divider />
              <Link to={'/admin/revisar-tareas/tareas-secundaria-activas/'+ dato.id }>
              <ListItem
                primaryText={dato.nombre
                }
                secondaryText={
                  <p>
                    <span><strong>Status: </strong></span>
                    {dato.status}
                  </p>
                }
              />
              </Link>
            </div>
          )
          })
        }
      </div>
    )
  }
}

class TareasPrincipalesActivas extends Component {
  constructor() {
    super()
    {/* Este es el status al que se le agregan los datos de la BD */}
  }
  state={
    tareas:[]
  }

  componentWillMount(){
    var tareas=[];
    var self=this;
    var user =firebaseAuth.currentUser;
    var userDB = user.email.split('.').join('-');
    var refTareasActuales=ref.child('ingTala/'+userDB+'/tareasActuales');
    var promise=new Promise(
      function (resolve, reject){
     refTareasActuales.on('value', function(snapshot){
      snapshot.forEach(function(snapChild){
        resolve (tareas= tareas.concat([{nombre:snapChild.val().tarea,descripcion:snapChild.val().descripcion,id:snapChild.val().id}]));

        })
      })
    }
  )
  promise.then(
    function(){
      self.setState({
      tareas:tareas
      })
    }
  )
  }

  render(){
    return(
      <div id="tareas-principlaes-activas">
        <h2>Tareas Principales Pendientes</h2>
        <List>
          <ItemTareaActiva datos={this.state.tareas} />
        </List>
      </div>
    )
  }
}

export default TareasPrincipalesActivas;
