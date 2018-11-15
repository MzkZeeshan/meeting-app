import React, { Component } from 'react';
import '../../App.css';
//import firebase from './Config/firebase';
import { Button } from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "../../Config/firebase";


// https://tomchentw.github.io/react-google-maps/




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


    // firebase.auth()
    // .signInWithEmailAndPassword('demo@demo.com', 'demodemo')
    // .then(res => console.log('success', res))
    // .catch(err => console.log('error', err))

    // firebase.auth().signOut()

    // firebase.auth().onAuthStateChanged(res => console.log('res', res))
  
  


  
  render() {

    console.log("props data",this.props.location.state);
    return (
      <div>
    <h1>You haven’t done any meeting yet! </h1>
    <Button color="primary" style={{color:"white"}} onClick={()=>{  this.props.history.push("/Meeting",this.props.location.state);}}> Set a meeting!</Button>
      </div>
    );
  }
}
export default App;
