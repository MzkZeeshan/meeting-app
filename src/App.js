import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './Config/firebase'
import { InputGroup, InputGroupAddon, InputGroupText, Input ,Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Facebooklogin from './Component/Facebooklogin/Facebooklogin'
import Googlemap from './Component/Googlemap/Googlemap';
import Step1 from './Component/Steps/Step1';
import Step2 from './Component/Steps/Step2';
import Step3 from './Component/Steps/Step3';
import Dashboard from './Component/Dashboard/Dashboard'
import Meeting from './Component/Meeting/Meeting'
class App extends Component {

  constructor()
  {
    super()
    this.state={
      user:{}
    }
    this.userData=this.userData.bind(this);

  }
  userData(user)
  {
    console.log("props",this.props);
   this.setState({user});
 

  }
  router()
  {
    return(
      
      <Router>
        <div>
      <Route exact path="/" component={Facebooklogin}  />
      <Route  path="/step1" component={Step1} />
      <Route  path="/step2" component={Step2} />
      <Route  path="/step3" component={Step3} />
      <Route  path="/map" component={Googlemap} />
      <Route  path="/Meeting" component={Meeting} />
      <Route path="/Dashboard" component={Dashboard}/>
      </div>
      </Router>)

  }
  
  componentDidMount()
  {
 

  }

  render() {
    {
   
{console.log("data",this.state.user)}
    return (
     
   
      <div className="App">
          { this.router()}
          {console.log("props",this.props)}
    {/* {!this.state.user.lenth && <Facebooklogin userData={this.userData}/>} */}
  


      </div>
    );
  }
}

}
export default App;












