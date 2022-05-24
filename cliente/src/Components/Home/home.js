import React, { Component } from 'react';
import "./home.css";
import Room from "../Room/room"
import JoinCreate from "../../SmallComponents/JoinCreate/joinCreate"
import io from "socket.io-client";

const socket=io.connect("http://localhost:3001")
//const socket=io.connect("https://planning-poker-2.herokuapp.com/")
//var socket = io('https://planning-poker-2.herokuapp.com/', { transports : ['websocket'] });

class Home extends Component {
    constructor(props){
      super(props);
      this.state={
        state:"",
        id:"",
        joinID:""
    }}

createRoom=()=>{
  this.setState({state:"create"})
  socket.emit("room-created",this.hashID)
}
joinRoom=()=>{
  this.setState({state:"join"})
}

addID=(value)=>{
  this.setState({id:value})
  console.log(this.state.id)
}

random=()=>{
  var result= '';
    var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 6; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

hashID=this.random();

render() {
    return(
      
      <div>
       {this.state.state ===""? <JoinCreate create={this.createRoom} join={this.joinRoom} id={this.hashID} addID={this.addID} joinID={this.joinID}/>:<span></span>}
       {this.state.state ==="create"? <Room socket={socket} admin={true} state={"creatingRoom"} id={this.hashID}/> :<span></span>}
       {this.state.state ==="join"? <Room socket={socket} admin={false} state={"waiting"} id={this.state.id}/>:<span></span>}
      
      </div>  
      
   
      
      
    );
  }}

export default Home;