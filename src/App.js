import React, { Component } from 'react';

//CSS
import './App.css';

//Components
import Login from './components/Login.js'
import AppBar from 'material-ui/AppBar';

//material-ui components
import IconButton from 'material-ui/IconButton';

//router
import Routes from './components/Routers/MainRoutes.js'

const styles = {
  navbar:{
    paddingLeft:0,
    paddingRight:'50px',
    backgroundColor:'#2C434B'
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title={<span style={styles.title}>Gestor de Proyectos</span>}
          iconElementLeft={<IconButton></IconButton>}
          style={styles.navbar}
        />
        {/*Router*/}
        <Routes />
      </div>
    );
  }
}

export default App;
