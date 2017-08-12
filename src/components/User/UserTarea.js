import React, {Component} from 'react'

//material ui components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

//icons
import FaChain from 'react-icons/lib/fa/chain'
import MdCancel from 'react-icons/lib/md/cancel'

import './UserTarea.css'


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

class Files extends Component{
  constructor(props){
    super()
  }

  handleClick = () => this.props.funEliminar(this.props.index);

  render(){
    return(
      <div>
        <li>
          <FaChain />
          {this.props.name}
          <span id="user-cancel-icon" onClick={this.handleClick}>
          	<MdCancel />
          </span>
        </li>
      </div>
    )
  }
}

class UserTarea extends Component {
  constructor() {
    super();
    this.state = {
      arregloArchivos : [],
      file: '',
      filePreviewUrl: [],
      arrayPreview:[],
      arrayNames:[],
      arrayInfoTarea:[{tarea:"Hacer Nominas", descripcion:"Anotarlas con letra clara."}],
    }
  }

  handleOnChangeInput = (event) =>{
    let reader = new FileReader();
  	let file = event.target.files[0];
    alert(file.name)
    reader.onloadend = () => {
     this.setState({
       filePreviewUrl: reader.result
     });
      this.agregarArchivo(file.name);
    }
   	reader.readAsDataURL(file);
  }

  agregarArchivo = (file) =>{
    this.setState({
      arrayNames:this.state.arrayNames.concat([{name:file}]),
      arrayPreview:this.state.arrayPreview.concat([{url:this.state. filePreviewUrl}]),
    });
  }

  eliminarArchivo = (index) =>{
    var array=this.state.arrayPreview;
    var arregloFile=this.state.arrayNames;
      array.splice(index,1);
      arregloFile.splice(index,1);
      this.setState({
        arrayPreview:array,
        arrayNames:arregloFile,
      })
  }

  handleClickFile = () =>{

  }

  render(){
    return(
      <div id="user-tarea">
        <h2><strong> Tarea: </strong> {this.state.arrayInfoTarea[0].tarea}</h2>
          <h2><strong> Descripcion: </strong> {this.state.arrayInfoTarea[0].descripcion}</h2>
          <h2><strong> Notas: </strong></h2>
            <TextField
              underlineFocusStyle={{borderColor: "#DED5B8"}}
              multiLine={true}
              rows={2}
              rowsMax={4}
            />
            <div id="user-tarea-evidencia">
              <h2>EVIDENCIA: </h2>
              <ul id="user-files-list">
                {this.state.arrayPreview.map((archivo,i)=>{
                   return (
                    <Files key={i} index={i}
                      isActive={this.state.activeIndex===i}
                      funEliminar={this.eliminarArchivo.bind(this)}
                      archivo={archivo.url}
                      name={this.state.arrayNames[i].name}
                      onClick={this.handleClickFile}/>
                    );
                  })
                 }
              </ul>
              <RaisedButton
                label="Subir archivo"
                labelPosition="before"
                style={styles.button}
                containerElement="label"
              >
                <input type="file" style={styles.exampleImageInput} onChange={this.handleOnChangeInput.bind(this)} />
              </RaisedButton>
              </div>
          <div id="user-tarea-radiobuttons">
            <RadioButtonGroup name="shipSpeed" defaultSelected="Recibido">
                <RadioButton
                  value="Recibido"
                  label="Recibido"
                  iconStyle={{color: '#2C434B'}}
                  style={styles.radioButton}
                />
                <RadioButton
                  value="En Proceso"
                  label="En Proceso"
                  style={styles.radioButton}
                />
                <RadioButton
                  value="Completado"
                  label="Completado"
                  style={styles.radioButton}
                />
            </RadioButtonGroup>
          </div>
          <div id="user-tarea-button">
              <RaisedButton label="Enviar"primary={true}/>
          </div>
      </div>
    )
  }
}

export default UserTarea;
