import React, { Component } from 'react';
import '../../App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input ,Jumbotron, Button } from 'reactstrap';
//import firebase from './Config/firebase';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import firebase from '../../Config/firebase'







class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url:null,
      url2:null,
      url3:null
    
    }
  }
  image()
  {
    var storageRef = firebase.storage().ref(); 
    var imagesRef = storageRef.child('images/ads_'+ Math.random().toString().substring(2, 6) +'.jpg');
    var file = document.getElementById('imageId').files[0];
    // use the Blob or File API
   
    return new Promise((resolve, reject) => {
        imagesRef.put(file)
        .then((snapshot)=> {
            console.log('Uploaded a blob or file!', snapshot);
            imagesRef.getDownloadURL().then((url1)=> {
              const {url}=this.state;
              this.setState({url :url1 });
                console.log('URL *****', url)
                resolve(url);
              }).catch(function(error) {
                console.log("upload wala",error)
              });
        }).catch((e) => {
            console.log('bhai kuch masla hai', e)
        });
    })
  }
 

  image1()
  {
    var storageRef = firebase.storage().ref(); 
    var imagesRef = storageRef.child('images/ads_'+ Math.random().toString().substring(2, 6) +'.jpg');
    var file = document.getElementById('imageId1').files[0];
    // use the Blob or File API
   
    return new Promise((resolve, reject) => {
        imagesRef.put(file)
        .then((snapshot)=> {
            console.log('Uploaded a blob or file!', snapshot);
            imagesRef.getDownloadURL().then((url1)=> {
             
              this.setState({url1 :url1 });
                console.log('URL *****', url1)
                resolve(url1);
              }).catch(function(error) {
                console.log("upload wala",error)
              });
        }).catch((e) => {
            console.log('bhai kuch masla hai', e)
        });
    })
  }

  image2()
  {
    var storageRef = firebase.storage().ref(); 
    var imagesRef = storageRef.child('images/ads_'+ Math.random().toString().substring(2, 6) +'.jpg');
    var file = document.getElementById('imageId2').files[0];
    // use the Blob or File API
   
    return new Promise((resolve, reject) => {
        imagesRef.put(file)
        .then((snapshot)=> {
            console.log('Uploaded a blob or file!', snapshot);
            imagesRef.getDownloadURL().then((url1)=> {
          
              this.setState({url2 :url1 });
                console.log('URL *****', url1)
                resolve(url1);
              }).catch(function(error) {
                console.log("upload wala",error)
              });
        }).catch((e) => {
            console.log('bhai kuch masla hai', e)
        });
    })
  }
next()
{
  const {url,url1,url2} =this.state;
 const data= this.props.location.state;
 console.log("data in next",data);
 data.URL = [url,url1,url2];
 this.props.history.push("/step3",data);
 
}
  render() {
    {console.log("state",this.state.url)
      console.log("Step 2",this.props.location.state)}
    const {url,url1,url2} =this.state;
return(
  <div className="row"> 
      <div className="col-md-4 apna offset-md-4 ">

     
     <input  type="file" onChange={()=>{this.image()}} id="imageId" />
  <br/>
  <input  type="file" onChange={()=>{this.image1()}} id="imageId1" />
  <br/>
  <input  type="file" onChange={()=>{this.image2()}} id="imageId2" />
  <br/>
 {url && url1 && url2 && <button  onClick={()=>{this.next()}} >Next</button>}

  </div>
  </div>

)
  }
}


export default Step2;
