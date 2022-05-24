import React, { Component } from 'react';
import "./room.css";
import Waiting from "../Waiting/waiting";
import Voted from "../Voted/voted";
import Results from "../Results/results";
import Votation from "../Votation/votation"
import Admin from "../../SmallComponents/Admin/admin";
import ChangeName from "../../SmallComponents/ChangeName/ChangeName"
import AddStory from '../../SmallComponents/AddStory/AddStory';

//import io from "socket.io-client";
//const socket=io.connect("http://localhost:3001")

class Room extends Component {
    constructor(props){
      super(props);
      this.state={
        roomID:this.props.id,
        estadoSala:this.props.state,
        admin:this.props.admin,
        name:"anonymous user",
        users:[],
        stories:[]
    }}
    
    componentDidMount() {
      this.props.socket.emit("join_room",{name:this.state.name,room:this.state.roomID})
      console.log("emited")

      this.props.socket.on("send-data",(data)=>{
        this.setState({users:data})
      })

      this.props.socket.on("change-state",(newState)=>{
        this.setState({estadoSala:newState})
      })
      console.log("The roomID is", this.state.roomID)

      this.props.socket.on("get-story",(stories)=>{
        this.setState({stories:stories})
        console.log(this.state.stories)
      })

    }

    actualizarName=(newName) => {
      this.setState({name:newName})
      }
    
    sendEventNewName=()=>{
      console.log("emited new name: ",this.state.name)
      this.props.socket.emit("change_name",this.state.name)
    }

    stateWaitingVotes=()=>{
      this.setState({estadoSala:"voted"})
    }

    startGame=()=>{
      this.setState({estadoSala:"waiting"})
      this.props.socket.emit("room-created",this.state.roomID)
    }
    changeState=()=>{
      if (this.state.estadoSala==="waiting"){
        this.props.socket.emit("sendState","voting")
      }
      else if (this.state.estadoSala==="voting"){
        this.props.socket.emit("sendState","results")
      }
      else if (this.state.estadoSala==="voted"){
        this.props.socket.emit("sendState","results")
      }
      else if (this.state.estadoSala==="results"){
        this.props.socket.emit("sendState","voting")
      }

    }

  
render() {
    return(
      
      
      <div className="main-body">
        {this.state.admin ? <Admin changeState={this.changeState}/>:<span></span>}
        <h2>Room ID: {this.state.roomID}</h2>
        {this.state.estadoSala ==="creatingRoom"? <AddStory start={this.startGame} socket={this.props.socket} roomID={this.state.roomID}/>:<span></span>}
        {this.state.estadoSala ==="waiting"? <ChangeName name={this.state.name} modify={this.actualizarName} sendEventNewName={this.sendEventNewName}/>:<span></span>}
        {this.state.estadoSala ==="waiting"? <Waiting users={this.state.users}/>:<span></span>}
        {this.state.estadoSala ==="voted"? <Voted/>:<span></span>}
        {this.state.estadoSala ==="results"? <Results users={this.state.users}/>:<span></span>}
        {this.state.estadoSala ==="voting"? <Votation users={this.state.users} socket={this.props.socket} changeState={this.stateWaitingVotes}/>:<span></span>} 
      </div>
      
   
      
      
    );
  }}

export default Room;