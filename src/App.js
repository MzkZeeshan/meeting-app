import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './Config/firebase'
import { InputGroup, InputGroupAddon, InputGroupText, Input ,Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Facebooklogin from './Component/Facebooklogin/Facebooklogin'
class App extends Component {
  constructor()
  {
    super()


  }
  router()
  {
    return(
      
      <Router>
        <div>
      <Route exact path="/" component={Facebooklogin} />
      <Route  path="/step" component={Step1} />
      </div>
      </Router>)

  }
  
  componentDidMount()
  {
 

  }

  render() {
   
    return (
        
      <div className="App">
   
  {this.router()}
      </div>
    );
  }
}





const Step1 = () => (
  <div className="row"> 
      <div className="col-md-4 apna offset-md-4 ">
     <form>
     
  <InputGroup>
    <InputGroupAddon addonType="prepend">Nick Name</InputGroupAddon>
    <Input placeholder="Nick Name" />
  </InputGroup>
  <br/>
  <InputGroup>
    <InputGroupAddon addonType="prepend">Phone No</InputGroupAddon>
    <Input placeholder="Phone No" />
  </InputGroup>
  <br/>
  <Button color="primary">Next</Button>
  </form>
  </div>
  </div>

)

export default App;