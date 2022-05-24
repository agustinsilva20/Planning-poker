import React, { Component } from 'react';
import "./joinCreate.css";


class JoinCreate extends Component {
    constructor(props){
      super(props);
      this.state={
        pedido:""
    }}

  
render() {
    return(
      
 
      <div className="main-body">
          <h1>Planning Poker 2.0</h1>
          <div className="btn" onClick={this.props.create}>Crear Sala</div>
          <div className="join-room"><input type="text" className="roomID" value= {this.props.joinID} onChange={e => this.props.addID(e.target.value)}/><div className="btn" onClick={this.props.join} >Unirse a sala 1</div></div>
          
      </div>
        
      
   
      
      
    );
  }}

export default JoinCreate;