import React, {Component} from 'react'
import './RevisarTareaAdmin.css'
import {Link} from 'react-router-dom'
import {ref,firebaseAuth} from '../../const.js'
//css
import './TareasPrincipalesRealizadasAdmin.css'

//material-ui components
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

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

class ItemTareaRealizada extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="tareas-principales-items">
        {this.props.datos.map((dato,key) =>{
          return(
            <div>
              <Divider />
              { dato.status == "En proceso" ? '' :
              <Link to={`/admin/revisar-tareas/tareas-secundaria-realizadas/`+dato.id}>
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
            }
            </div>
          )
          })
        }
      </div>
    )
  }
}

class TareasPrincipalesRealizadas extends Component {
  constructor() {
    super()
      {/* Este es el state(tareas) al que se le agregan los datos de la BD */}
    this.state = {

      tareas:[],
    }
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
        resolve (tareas= tareas.concat([{nombre:snapChild.val().tarea,descripcion:snapChild.val().descripcion,id:snapChild.val().id,status:snapChild.val().status}]));

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
      <div id="tareas-principales-realizadas">
        <h2>Tareas Principales Realizadas</h2>
        <List>
          <ItemTareaRealizada datos={this.state.tareas} />
        </List>
      </div>
    )
  }
}

export default TareasPrincipalesRealizadas;
