import React, { Component } from 'react';
import '../../App.css';
//import firebase from './Config/firebase';

import Cards, { Card } from 'react-swipe-deck'
import { Card as Cardss, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import swal from 'sweetalert';

import firebase from "../../Config/firebase";


// https://tomchentw.github.io/react-google-maps/

const client_id ="Q4IFWRSK1WNERA2PUJZDSWGFURB45UAXDC3UCIMUFG04SEBA";
const client_screat="BUSBS1S0YFS1NTQAFAAWEV0DXOYPGF03K2JMAQNXIIMF2PFT";

class Meeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData:[],
next:null,
selectedUsers:[],
currentUser:[],
venues: [],
meetingDetails:{
  coords : {}
}
    }
    this.next=this.next.bind(this)
    this.card=this.card.bind(this);
    this.meet=this.meet.bind(this)
  }
componentDidMount()
{
  console.log("current user",this.props.location.state);
  this.setState({currentUser:this.props.location.state})

  const {userData,selectedUsers,currentUser}=this.state;
  firebase.database().ref().child("userData").on('child_added',data=>{
    console.log("data",data);
  
  
  
    console.log("data user",data.val());



   
    var dataa=data.val();
    userData.push(dataa);
      this.setState({userData});
  

      





  
})


// console.log("")

userData.map((value,i)=>{


    console.log("value",value);
  var selectedFlag = false;
  value[i].user.minutes.map((value2)=>{
    if(currentUser.user.minutes.includes(value2))
    {selectedFlag = true}
  })
  
  value[i].user.beverages.map((value2)=>{
    if(currentUser.user.beverages.includes(value2))
    {selectedFlag = true}
  })
  
  if(selectedFlag === true){
    selectedUsers.push(value.user[i])
    this.setState(selectedUsers)
  }
  
  
  })



}
next(i)
{
  const {userData} =this.state;
  delete userData[i];
  this.setState(userData)
}
    // firebase.auth()
    // .signInWithEmailAndPassword('demo@demo.com', 'demodemo')
    // .then(res => console.log('success', res))
    // .catch(err => console.log('error', err))

    // firebase.auth().signOut()

    // firebase.auth().onAuthStateChanged(res => console.log('res', res))
  
  setMeeting(index)
  {
    const {userData,currentUser,venues}=this.state;
    const a=userData[index];
    console.log("Meeting with"+a.user.name);
// fetch( 'https://api.foursquare.com/v2/venues/search?client_id='+client_id+'&client_screat='+client_screat+'&v=20180323&limit=5&ll='+cords)
// .then(res => res.json())
// .then(data =>{
// //  fetch('https://api.foursquare.com/v2/venues/'+data.response.venues[0]+"?client_id="+client_id+'client_id&'+client_screat+'=client_screat&v='+20180323+'&limit=5&ll='+cords)
// }

//    )
// .catch()

swal({
  title: "Are you sure set a meeting?",
  text: "Nick Name is "+a.user.name ,
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    
    console.log("will delete"+willDelete);
    this.setState({meetingWith : a.user.uid});
    swal("your meeting Will be set "+a.user.displayName, {
      icon: "success",
  
    });
   
  } else {
    swal("Your imaginary file is safe!");
  }
})

.then(()=>
{
  fetch(
    `https://api.foursquare.com/v2/venues/explore?client_id=TCEW2YEVYB3DZRKWOZMW2JMYUQNKB4HNUMGCNPUGLSAQZXUM&client_secret=4KCFM5Q5FCDHIVUDD3XSDXYRCJVQLFDROBAQDR5R334MKTPD&v=20180323&ll=${currentUser.user.coords.latitude},${currentUser.user.coords.longitude}`
  )
    .then(data => {
      return data.json();
    })
    .then(data2 => {
      console.log(data2)
      data2.response.groups[0].items.map((value, index) => {
        index < 3 &&
          venues.push({
            name: value.venue.name,
            address: value.venue.location.address,
            lat: value.venue.location.lat,
            lng: value.venue.location.lng
          });
      });
      this.setState(venues);
    });
}

)





  }

  selectVenue(e, index) {
    const { meetingDetails, venues, navigation } = this.state;
    meetingDetails.meetingVenue = venues[index];
    meetingDetails.coords.latitude = venues[index].lat;
    meetingDetails.coords.langitude = venues[index].lng;
    this.setState(meetingDetails);
    console.log("index no",index);
    console.log("venues",venues);
    console.log("e value in selected venue",meetingDetails)
  }
card()
{const {userData,meetingWith}=this.state;
  
  return(
    <div>
      <center>

  

        <Cards size={[500,370]}  cardSize={[500,200]} className='master-root'>

       
       {userData.map((item,index) =>      
        <Card
         >
          <div class="s">
         <Cardss>
      <CardImg top width="100%" src={item.user.URL[1]} alt="Card image cap" />
  
      <CardBody>
  {/* {console.log("URLS   "+item.user.URL[0]) } */}
        <Button outline color="danger" onClick={()=>this.next(index)} style={{float:"left"}}>Not</Button>
        {item.user.name}
        <Button outline color="success"onClick={()=>this.setMeeting(index)} style={{float:"right"}}>yes</Button>
      </CardBody>
    </Cardss>

          </div>
        </Card>
 
    
         
      )}       
   
    </Cards>

    </center>

    </div>
  )
}
meet()
{
  const {meetingWith,venues}=this.state;
  return(
    <div>
      <h1>Select your Meeting Venue</h1>
      {venues.map((value, index) => {
                return (
                  <div>
                  <input type="radio"
                    onClick={e => {
                      this.selectVenue(e, index);
                    }}
                  
                
                  />
                    <span className="radio-btn-value">
                      {value.name},{value.address}
                    </span>
                    </div>
                  // </input>
                );
              })}
     <h1> <label for="meeting-time">Choose a time for your appointment:</label></h1>
      <input type="time" id="meeting-time"
       name="meeting-time" 
       min=""/>
       <h1> <label for="meeting-date">Choose a date for your appointment:</label></h1>
      <input type="date" id="meeting-date"
       name="meeting-date" 
     />
        <Button color="primary" onClick={()=>this.sendRequest()}>Next</Button>
    </div>

  )

}

sendRequest()
{
  var time = document.getElementById("meeting-time").value;
  
  var date = document.getElementById("meeting-date").value;
  alert(date +"and" + time);
  const {meetingDetails,venues,meetingWith,currentUser}=this.state;
  console.log("meeting detail",meetingDetails );
  if(time != null && date != null)
  {
    const meeting = {
    sender: currentUser.user.uid,
    receiver: meetingWith,
    date: date,
    time: time,
    venue: meetingDetails.meetingVenue,
    status: "pending"
    }
    console.log("meeting with",meeting);
    firebase.database().ref("meetingData").push(meeting)
    .then((added) => {
      swal("Good job!", "You Meeting will Set", "success");
      this.props.history.push("/Dashboard");
     
    
     

    })
    .catch((error) => {
      alert("Something wrong here please contact");

    });
    
  }
  else
  {

  }


}

  
  render() {
    const {meetingWith,venues}=this.state;
    console.log("venues",venues);
   // console.log("selected user",this.state.selectedUsers[])

    

  
  ///console.log("console meeting with data"+JSON.stringify(meetingWith))
  const data=[1,2,2]
  return (
    <div>
    {!meetingWith && this.card()}
    {meetingWith && this.meet()}
    </div>
  )
  }
}
export default Meeting;
