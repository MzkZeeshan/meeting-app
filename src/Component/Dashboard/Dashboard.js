import React, { Component } from 'react';
import '../../App.css';
//import firebase from './Config/firebase';

import { Card , CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "../../Config/firebase";


// https://tomchentw.github.io/react-google-maps/




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser : {},
      meetings : [],
      allData : []

    }
    this.sendRequestForMeeting =this.sendRequestForMeeting.bind(this);
  }

  componentDidMount()
  {
    const {meetings,currentUser,allData} =this.state;
    
   this.setState({currentUser : this.props.location.state},()=>
    {
  fetch(`https://react-first-app-firebase.firebaseio.com/meetingData/${this.state.currentUser.user.uid}.json`)
    .then(res=> res.json())
    .then(data=>
      {
      for (var index in data) {
        meetings.push(data[index]);
     } 
     this.setState({meetings})
    })
    fetch(`https://react-first-app-firebase.firebaseio.com/userData.json`)
    .then(res=> res.json())
    .then(dataa=>
      {
       for (var indexx in dataa) {

         allData.push(dataa[indexx]);
       
        }
       console.log("response",dataa);

    })

         this.setState({allData},()=>console.log("all data",allData))
    // fetch(`https://react-first-app-firebase.firebaseio.com/userData/user.json`)
    // .then(data => data.json())
    // .then(data => console.log("response",data))
  //   firebase.database().ref('userData').on("value", function(snapshot) {
  //     console.log("response",snapshot.val());
  //     snapshot.forEach(function(data) {
  //       for (var index in data) {
  //         alldata.push(data[index]);
  //      } 
  //     });
  // });
  console.log("Current User ",this.state.currentUser.user.uid);

   });
  

  }

    // firebase.auth()
    // .signInWithEmailAndPassword('demo@demo.com', 'demodemo')
    // .then(res => console.log('success', res))
    // .catch(err => console.log('error', err))

    // firebase.auth().signOut()

    // firebase.auth().onAuthStateChanged(res => console.log('res', res))
  getName(i)
  {
console.log("i ki value",i)
  }
sendRequestForMeeting()
{
  const {meetings,allData}=this.state;
  return (
    <div>
    <center>

  {/* {allData.length && console.log("all Dataa",allData.)} */}
     
{meetings.map((v,i) =>
  {
     return (  
<div class="s" style={{width:"200px"}}>
     <Card>
        <CardImg top width="100%" src={v.receiverPhoto} alt="Card image cap" />
        <CardBody>
          <CardTitle>{
          v.receiverName
 
        //  allData.length !== 0 &&  allData.filter((allData)=>allData.uid == v.sender) && 
          }        
    </CardTitle>
          <CardSubtitle>Address</CardSubtitle>
          <CardText>{v.venue.meetingVenue}</CardText>
          <Button>{v.status}</Button>
        </CardBody>
      </Card>
     </div>
     )
     }

     )}
     
  </center>
  </div>

  )
    }


  
  render() {

const {meetings} =this.state;
    console.log("state meeting",this.state.meetings);
    
 
    
    return (
      
      <div>

    <Button color="primary" style={{color:"white"}} onClick={()=>{  this.props.history.push("/Meeting",this.props.location.state);}}> Set a meeting!</Button>
    
    {meetings && <h1>You haven’t done any meeting yet! </h1>}
   { this.sendRequestForMeeting() }
    
     </div>
    );
  }
}
export default App;
