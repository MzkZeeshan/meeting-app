import React, { Component } from 'react';
import '../../App.css';
//import firebase from './Config/firebase';
import { Button } from 'reactstrap';


import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import firebase from "../../Config/firebase";


// https://tomchentw.github.io/react-google-maps/




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coords: null,
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
   console.log("zeeshan",position.coords.latitude)
      this.setState({ coords:{latitude : position.coords.latitude, longitude : position.coords.longitude }  })

    })
    // firebase.auth()
    // .signInWithEmailAndPassword('demo@demo.com', 'demodemo')
    // .then(res => console.log('success', res))
    // .catch(err => console.log('error', err))

    // firebase.auth().signOut()

    // firebase.auth().onAuthStateChanged(res => console.log('res', res))
  }
  submitData()
  {
    const data= this.props.location.state;
    data.user.coords=this.state.coords;
    
    console.log("final Data",data);
    firebase.database().ref("userData").push(data)
    .then((added) => {
      console.log("add added",added);
     this.props.history.push("/Dashboard",data);
      console.log("props not Working",this.props);
  

    })
    .catch((error) => {
      alert("Something wrong here please contact");
      console.log("props not Working",this.props);
    });
  }

  // loginFb = () => {
  //   firebase.auth().signInWithPopup(provider).then(function(result) {
  //     var token = result.credential.accessToken;
  //     var user = result.user;
  //     // console.log('user', user)
  //   }).catch(function(error) {
  //     // var errorCode = error.code;
  //     // var errorMessage = error.message;
  //     // var email = error.email;
  //     // var credential = error.credential;
  //     // console.log('err',error)

  //   });
  // }

  dragged = e => {
    this.setState({coords: { 
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng()
    }} )
  }
  
  render() {
    const {
      coords
    } = this.state;
    console.log('coords', coords)
    
    return (
      <div>
    
        <br/>
        <br/>
        <br/>
        {coords && 
        <MyMapComponent
          coords={coords}
          dragged={this.dragged}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        }
          <br/>
        <br/>
        <Button color="success" onClick={()=>this.submitData()} size="lg">Submit</Button>{' '}
      </div>
    );
  }
}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  

  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: props.coords.latitude, lng: props.coords.longitude }}
    center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
  >
    {props.isMarkerShown &&
    <Marker
      draggable
      onDragEnd={e => props.dragged(e)} 
      position={{ lat: props.coords.latitude, lng: props.coords.longitude }} 
    />}
  </GoogleMap>
))

export default App;
