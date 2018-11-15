import React, { Component } from 'react';
import '../../App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input ,Jumbotron, Button } from 'reactstrap';
//import firebase from './Config/firebase';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";







class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    }
  }
  check()
  {
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    if(name != "" && phone!="")
    {
      const data=this.props.location.state;
      data.user.phoneNumber=phone;
      data.user.name=name;
      this.props.history.push("/step2",data);

    }
    else{
      alert("please fill all field");
    }
    
  }
 
  render() {

    
    return (
      <div>
   
  <div className="row"> 
      <div className="col-md-4 apna offset-md-4 ">
     <form>
    
     {/* {console.log("STEP TO",this.props.location.state.user)} */}
  <InputGroup>
    <InputGroupAddon addonType="prepend">Nick Name</InputGroupAddon>
    <input placeholder="Nick Name" id="name" />
  </InputGroup>
  <br/>
  <InputGroup>
    <InputGroupAddon addonType="prepend">Phone No</InputGroupAddon>
    <input placeholder="Phone No" id="phone" />
  </InputGroup>
  <br/>
  <Button onClick={()=>{this.check()}} color="primary">Next</Button>
  </form>
  </div>
  </div>
        
      </div>
    );
  }
}


export default Step1;
