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

class SelectFieldTarea extends Component{
  constructor(){
    super()
  }

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render(){
    return(
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.dialog}
          selectedMenuItemStyle={ {backgroundColor: '#C7B99C', color: '#FFFFFF'} }
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly"/>
        </SelectField>
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
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

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
       onTouchTap={this.handleClose}
       style={styles.dialogButton}
     />,
   ];

    return(
      <div>
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
                <SelectFieldTarea />
                <h4>Tarea:</h4>
                <TextField
                  style={styles.dialog}
                  underlineFocusStyle={{borderColor: "#DED5B8"}}
                />
                <h4>Descripción:</h4>
                <TextField
                  style={styles.dialog}
                  underlineFocusStyle={{borderColor: "#DED5B8"}}
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                />
              </div>
            </Dialog>
          </div>
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
