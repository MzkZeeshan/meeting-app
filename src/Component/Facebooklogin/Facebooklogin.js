import React, { Component } from 'react';


import firebase from '../../Config/firebase'
import { Jumbotron, Button } from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor()
  {
    super()
    this.state={}
    this.Login=this.Login.bind(this);

  }
  componentDidMount()
  {
 

  }
  
  Login()
  {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("user",user);
      console.log("token",token);
      this.setState({user:user})
     
      
      // ...
    }).catch(function(error) {
      console.log("error",error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

        this.props.history.push('\step1');
  }
  render() {
    {console.log(this.props)}
    return (
        
      <div className="App">
            <Jumbotron>
        <h1 className="display-3">Meeting App</h1>
        <p className="lead">Meeting in under 5 kilo meter Clinte</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
        
          <Button color="primary" onClick={this.Login}> Login with Facebook</Button>
        </p>
      </Jumbotron>
    
      </div>
    );
  }
}

export default App;



const firststep=()=>{
    alert("done")
}