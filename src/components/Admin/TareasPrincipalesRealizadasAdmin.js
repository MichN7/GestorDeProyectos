import React, {Component} from 'react'
import './RevisarTareaAdmin.css'

//css
import './TareasPrincipalesRealizadasAdmin.css'

//material-ui components
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

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
    this.state = {
      {/* Este es el status al que se le agregan los datos de la BD */}
      tareas:[{nombre:"Hacer una colectiva",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", status:"Completo"},
              {nombre:"Posada",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',status:"Completo"},
              {nombre:"Analisis Mercandil",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' ,status:"Completo"}],
    }
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
