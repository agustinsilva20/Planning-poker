import React, { Component } from 'react';
import "./AddStory.css";


class AddStory extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        story:"",
        added:0
    }}
    componentDidMount() {
        this.props.socket.emit("createRoom",this.props.roomID)
    }
    writeStory=(value)=>{
        this.setState({story:value})
    }

    sendStory=()=>{
      this.props.socket.emit("AddStory",{roomID:this.props.roomID,story:this.state.story})
     
      this.setState({added:this.state.added+1})
    }

render() {
    return(
      
        
      <div className="main-AddStory">
          <p>Stories Added: {this.state.added}</p>
          <input type="text" className="story" value= {this.props.story} onChange={e => this.writeStory(e.target.value)}/>
          <div className="buttons">
            <div className="btn btn-story" onClick={this.sendStory}>Add Story</div>
            <div className="btn btn-story" onClick={this.props.start}>Start Game</div>
          </div>
          
      </div>
      
   
      
      
    );
  }}

export default AddStory;