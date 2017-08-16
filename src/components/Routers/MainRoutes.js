import React,{Component} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import * as firebase from 'firebase'
import AdminRoute from './AdminRoute.js'
import Login from '../Login.js'
import NuevaTareaAdmin from '../Admin/NuevaTareaAdmin.js'
import {ref,firebaseAuth} from '../../const.js'
function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/' , state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/admin' />}
    />
  )
}

class Routes extends Component{
  state={
    autenticado:false,
    loading:true
  }
  componentWillMount(){
    this.removeListener=firebaseAuth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          autenticado:true,
          loading:false
        })
      }
      else{
        this.setState({
          autenticado:false,
          loading:false
        })
        console('hola');
      }
    })
  }
  componentWillUnmount(){
    this.removeListener()
  }
  render(){
    return this.state.loading === true ? <h1>Loading</h1> :(
  <Switch>
    <PublicRoute exact authed={this.state.autenticado} path="/" component={Login}/>
    <PrivateRoute  authed={this.state.autenticado} path="/admin" component={AdminRoute}/>
    <Route render={()=><h3> Ocurrió un error </h3>}/>
  </Switch>
);
}
}

export default Routes;
