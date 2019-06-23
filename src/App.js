import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Preloader from './components/Preloader';
import Welcome from './components/Welcome';
import Logout from './components/Logout';

class App extends Component {
  state = {
    preloaderFlag: true,
    submited: false,
    logoutShowenFlag: false,
    welcomeShownFlag: false,
    formShownFlag: false
  }

  changeSubmitedState(){
    this.setState({ submited: !this.state.submited})
  }

  authSucces(){
    this.setState({ 
      logoutShowenFlag: true,
      welcomeShownFlag: true,
      formShownFlag: false
    })
  }

  logout(){
    this.setState({ 
      logoutShowenFlag: false,
      welcomeShownFlag: false,
      formShownFlag: true
    })
  }

  render(){
    const self = this;
    setTimeout(()=>{
      self.setState({
        preloaderFlag: false, 
        formShownFlag: true
      })
    }, 5000)
    
     return (
      <div className="App">
         { this.state.logoutShowenFlag ? <Logout logout={this.logout.bind(this)}/> : null}
         { this.state.preloaderFlag ? <Preloader/> : null} 
         { this.state.formShownFlag && !this.state.welcomeShownFlag ? <Form auth={this.authSucces.bind(this)} submited={this.changeSubmitedState.bind(this)}/> : null}
         { this.state.submited ? <Preloader/> : null }
         { this.state.welcomeShownFlag ? <Welcome/> : null }
      </div>
    );
  }
}


export default App;
