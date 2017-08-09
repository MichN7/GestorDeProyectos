import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
  render(){
    return(
      <div className="tareas-principales-items">
        {this.props.datos.map((dato,key) =>{
          return(
            <div>
              <Divider />
              <Link to={`/admin/revisar-tareas/tareas-secundaria-activas`}>
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
    this.state = {

      tareas:[{nombre:"Hacer una colectiva",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", status:"En proceso"},
              {nombre:"Posada",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',status:"En proceso"},
              {nombre:"Analisis Mercandil",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' ,status:"En proceso"}],
    }
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
