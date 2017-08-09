import React, {Component} from 'react'

//CSS
import './NuevaTareaAdmin.css'
import TextField from 'material-ui/TextField';

//material-ui components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

  //Dialog
  import Dialog from 'material-ui/Dialog';
  import FlatButton from 'material-ui/FlatButton';
  import RaisedButton from 'material-ui/RaisedButton';

  //SelectField
  import SelectField from 'material-ui/SelectField';
  import MenuItem from 'material-ui/MenuItem';

  //Chip
  import Chip from 'material-ui/Chip';

  //Date picker
  import DatePicker from 'material-ui/DatePicker';
  import areIntlLocalesSupported from 'intl-locales-supported';
  import persianUtils from 'material-ui-persian-date-picker-utils';

  const styles = {
    addButton:{
      marginTop:'6px',
    },
    dialog:{
      width: '100%',
    },
    dialogButton:{
      color: "#2C434B"
    },

  }

  //Convierte el date picker a idioma español, comprueba si se encuentra en Intl si no lo requiere en Polyfill

  let DateTimeFormat;
  if (areIntlLocalesSupported(['es-ES'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
  } else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/es-ES');
  }

class Chips extends Component{
  constructor(props) {
    super(props);

    this.styles = {
      chip: {
        margin: 4,
        width:'100%'
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete = (key) => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }
    const chipToDelete = this.props.datos.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  render(){
    return(
      <div style={this.styles.wrapper}>
        {this.props.datos.map((dato,key)=>{
          return (
            <Chip
              key={key}
              onRequestDelete={() => this.props.funEliminar(key)}
              style={this.styles.chip}
            >
              <div id="nueva-tarea-agregada">
                <h4 id="nueva-tarea-titulo">{dato.tarea}</h4>
                <hr className="style14"/>
                <h4 className="nueva-tarea-desc"><strong>Encargado: </strong> {dato.encargado}</h4>
                <h4 className="nueva-tarea-desc"><strong>Fecha límite de entrega: </strong> {dato.dia}</h4>
                <p>
                  <strong>Descripción: </strong>{dato.descripcion}
                </p>
              </div>
            </Chip>
           );
         })
        }
      </div>
    )
  }
}

class DialogTarea extends Component{
  constructor(){
    super()
  }
  state = {
    open: false,
    arreglo:[],
    tarea:"",
    descripcion:"",
    encargado:"",
    value:0,
    dia:"",
    personal:["Seleccione al encargado","Juan Perez","Juana Lopez", "Jose Gonzales"]
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleChangeEncargado = (event, index, value) => {
    this.setState({
      value:value,
      encargado:this.state.personal[value],
    });
  }

  handleCloseAceptar = () => {
    let tarea = this.state.tarea;
    let descripcion = this.state.descripcion;
    let encargado = this.state.encargado;
    let dia = this.state.dia;

      {/*Este state es el que se tiene que subir a la BD */}
    this.setState({

      arreglo: this.state.arreglo.concat([{tarea:tarea,
                                           encargado:encargado,
                                           dia:dia,
                                           descripcion:descripcion}]),
      open: false,
    });
  };

  handleChangeTarea = (event) => {
     this.setState({
       tarea:event.target.value
     });
   }

   handleChangeDescripcion = (event) => {
      this.setState({
        descripcion:event.target.value
      });
    }

  eliminarChip = (index) =>{
    let chips = this.state.arreglo;
    chips.splice(index,1);
    this.setState({
      arreglo: chips,
    })
  }

  setFechaDesde(x,event){
    var fecha=JSON.stringify(event);
    var fechaFormat=fecha.substring(1,11);
       this.setState({
        dia:fechaFormat
       })
  }

  render(){
    const actions = [
     <FlatButton
       label="Cancelar"
       primary={true}
       onTouchTap={this.handleClose}
       style={styles.dialogButton}
     />,
     <FlatButton
       label="Aceptar"
       primary={true}
       onTouchTap={this.handleCloseAceptar}
       style={styles.dialogButton}
     />,
   ];

    return(
      <div id="admin-dialog">
        <div id="admin-agergar-starea">
          <div id="admin-starea">
            <h2>Agregar sub-tarea</h2>
            <FloatingActionButton mini={true} style={styles.addButton} onTouchTap={this.handleOpen}>
              <ContentAdd />
            </FloatingActionButton>
            <Dialog
              title="Nueva Tarea"
              actions={actions}
              modal={true}
              open={this.state.open}
            >
              <div id="admin-dialog">
                <h4>Encargado:</h4>
                <SelectField
                  value={this.state.value}
                  onChange={this.handleChangeEncargado}
                  style={styles.dialog}
                  selectedMenuItemStyle={ {backgroundColor: '#C7B99C', color: '#FFFFFF'} }
                >
                {this.state.personal.map((persona,key)=>{
                  return (
                    <MenuItem value={key} key={key} primaryText={this.state.personal[key]}/>
                   );
                 })
                }
                </SelectField>
                <h4>Tarea:</h4>
                <TextField
                  style={styles.dialog}
                  underlineFocusStyle={{borderColor: "#DED5B8"}}
                  onChange={this.handleChangeTarea}
                />
                <h4>Descripción:</h4>
                <TextField
                  style={styles.dialog}
                  underlineFocusStyle={{borderColor: "#DED5B8"}}
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                  onChange={this.handleChangeDescripcion}
                />
                <h4>Día límite de entrega:</h4>
                <DatePicker
                  DateTimeFormat={DateTimeFormat}
                  okLabel="OK"
                  cancelLabel="Aceptar"
                  locale="es-ES"
                  onChange={(x, event) => this.setFechaDesde(x,event)}
                />
              </div>
            </Dialog>
          </div>
        </div>
        <Chips datos={this.state.arreglo} funEliminar={this.eliminarChip.bind(this)} />
        <div id="admin-dialog-button">
          <RaisedButton label="Aceptar" primary={true} style={{marginTop:'15%'}}/>
        </div>
      </div>
    )
  }
}

class NuevaTarea extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div id="admin-nueva-tarea">
        <div id="admin-nombre-tarea">
          <h2>Nombre de tarea</h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
          />
        </div>
        <div id="admin-descripcion-tarea">
          <h2>Descripción</h2>
          <TextField
            underlineFocusStyle={{borderColor: "#DED5B8"}}
            multiLine={true}
            rows={2}
            rowsMax={4}
          />
        </div>
        <DialogTarea />
      </div>
    )
  }
}

export default NuevaTarea;
