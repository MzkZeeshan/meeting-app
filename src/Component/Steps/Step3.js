import React, { Component } from 'react';
import '../../App.css';
//import firebase from './Config/firebase';
import { InputGroup, InputGroupAddon, InputGroupText, Input ,Jumbotron, Button } from 'reactstrap';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";







class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    }
  }

 next()
 {

 const {Cocktail,Juice,Coffee,min120,min20,min60}=this.state;
   var data ={};
 
   Cocktail && data.bev = "Cocktail";
   Juice && data.bev.push("Juice");
   Coffee && data.bev.push("Coffee");
   min120 && data.min=["120"];
   min20 && data.min.push("20");
   min60 && data.min.push("60");
   console.log(data);
   //this.props.history.push("/Googlemap",data);
 }
  render() {
    {console.log(this.props.location.state)}
    console.log("State",this.state);
  
    return (
      <div className="row"> 
      <div className="col-md-4 apna offset-md-4 ">
     <form>
     <label style={{float:"left",fontWeight:"bold"}}>Select Beverages</label>
     <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <input type="checkbox" onChange={()=>this.setState({Coffee : !this.state.Coffee})}  />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Coffee"  />
      </InputGroup>

 <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <input type="checkbox" ref="check" value="juice" onChange={()=>this.setState({Juice : !this.state.Juice})}  aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder=" Juice" />
      </InputGroup>




 <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <input type="checkbox" onChange={()=>this.setState({Cocktail : !this.state.Cocktail})} aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder=" Cocktail" />
      </InputGroup>
      <br />


      






    <label style={{float:"left",fontWeight:"bold"}}>Duration Of Meeting</label>
     <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <input type="checkbox" name="time" onChange={()=>this.setState({min20 : !this.state.min20})} />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="20 min" />
      </InputGroup>

 <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <input type="checkbox" name="time" onChange={()=>this.setState({min60 : !this.state.min60})}  />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="60 min" />
      </InputGroup>




 <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <input type="checkbox"   name="time" onChange={()=>this.setState({min120 : !this.state.min120})} />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="120 min" />
      </InputGroup>
      <br />




  <Button color="primary" onClick={this.next()}>Next</Button>


  </form>
  </div>
  </div>
    );
  }
}


export default Step3;
