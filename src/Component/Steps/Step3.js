import React, { Component } from 'react';
import '../../App.css';
//import firebase from './Config/firebase';
import { InputGroup, InputGroupAddon, InputGroupText, Input ,Jumbotron, Button } from 'reactstrap';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";







class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Cocktail:false,
      Juice:false,
      Coffee:false,
      min120:false,
      min20:false,
      min60:false,
     
    
    }
  }

 next()
 {

 const {Cocktail,Juice,Coffee,min120,min20,min60}=this.state;
 const bev_min ={
  bev:{
    
  },
  min:{

  }
};
 
bev_min.bev.Cocktail = Cocktail;
bev_min.bev.Juice = Juice;
bev_min.bev.Coffee = Coffee;
bev_min.min.min120 = min120;
bev_min.min.min20 = min20;
bev_min.min.min60 = min60;
  //  Juice && data.bev.push("Juice");
  //  Coffee && data.bev.push("Coffee");
  //  min120 && data.min.push("120");
  //  min20 && data.min.push("20");
  //  min60 && data.min.push("60");
  const data= this.props.location.state;
  data.user.bevrage=bev_min.bev;
  data.user.Minutes=bev_min.min;

   console.log(data);
   this.props.history.push("/map",data);

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
            <input type="checkbox" className="bev" onChange={()=>this.setState({Coffee : !this.state.Coffee})}  />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Coffee"  />
      </InputGroup>

 <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <input type="checkbox" className="bev"  ref="check" value="juice" onChange={()=>this.setState({Juice : !this.state.Juice})}  aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder=" Juice" />
      </InputGroup>




 <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <input type="checkbox" className="bev"  onChange={()=>this.setState({Cocktail : !this.state.Cocktail})} aria-label="Checkbox for following text input" />
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




  <Button color="primary" onClick={()=>this.next()}>Next</Button>


  </form>
  </div>
  </div>
    );
  }
}


export default Step3;
