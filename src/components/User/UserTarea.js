import React, {Component} from 'react'
import {ref,firebaseAuth} from '../../const.js'
//material ui components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Form} from 'react-bootstrap';

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
  constructor(match) {
    super();
    this.state = {
      arregloArchivos : [],
      file: '',
      filePreviewUrl: [],
      arrayPreview:[],
      arrayNames:[],
      arrayInfoTarea:[{tarea:"Hacer Nominas", descripcion:"Anotarlas con letra clara."}],
      Taskpath:`${match.match.params.id}`,
      radioOne: false,
      radioTwo: false,
      radioThree: false,
      notas:"",
    }
  }


  componentWillMount(){
    var self=this;
    var user =firebaseAuth.currentUser;
    var userDB = user.email.split('.').join('-');
    var referencia= ref.child('ingTala/'+userDB+'/tareasActuales');
    var array=[];
    var promise=new Promise(
      function(resolve,reject){
      referencia.on('value',snapshot=>{
        snapshot.forEach(snapChild=>{
          snapChild.forEach(snapBaby=>{
            if(snapBaby.val().id==self.state.Taskpath){
              resolve (array= array.concat([{tarea:snapBaby.val().tarea,descripcion:snapBaby.val().descripcion,fecha:snapBaby.val().fecha}]));

            }
          })
        })
      })
      }
    )

    promise.then(
      function(array){
        console.log(array);
        self.setState({
          arrayInfoTarea:array
        })
        console.log('listo');
      }
    )
  }

  Formulario=()=>{
    var self=this;
    var tare = self.state.arrayInfoTarea[0].tarea;


    var user =firebaseAuth.currentUser;
    var userDB = user.email.split('.').join('-');
    var refDB= ref.child('ingTala/'+userDB+'/tareasActuales/'+tare);
    refDB.set({
      descripcion:self.state.arrayInfoTarea[0].descripcion,
      encargado:user,
      fecha:self.state.date,
      id: self.state.Taskpath,
      status:self.state.radioVal,
      tarea:tare,
      notas:self.state.notas,
    });



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

  getValue = (e) =>{
    alert(e.target.value);
    let value = e.target.value;
    if(value === "Recibido"){
      this.setState({
        radioOne:true,
        radioTwo:false,
        radioThree:false,
        radioVal: value,
      })
    }else if (value === "En proceso") {
      this.setState({
        radioOne: false,
        radioTwo: true,
        radioThree: false,
        radioVal: value,
      })
    }else if (value === "Completado") {
      this.setState({
        radioOne: false,
        radioTwo: false,
        radioThree: true,
        radioVal: value,
      })
    }
  }
  handleChangeNotas = (event) => {
     this.setState({
       notas:event.target.value
     });
   }

  render(){
    return(
      <div id="user-tarea">
        <h2><strong> Tarea: </strong> {this.state.arrayInfoTarea[0].tarea}</h2>
          <h2><strong> Descripcion: </strong> {this.state.arrayInfoTarea[0].descripcion}</h2>
          <h2><strong> Fecha: </strong>{this.state.arrayInfoTarea[0].fecha}</h2>

            <TextField
              underlineFocusStyle={{borderColor: "#DED5B8"}}
              multiLine={true}
              onChange={this.handleChangeNotas}
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
            <RadioButtonGroup name="shipSpeed" defaultSelected="Recibido" onChange={this.getValue}>
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
              <RaisedButton label="Enviar"primary={true} onTouchTap={this.Formulario}/>
          </div>
      </div>
    )
  }
}

export default UserTarea;
