import React, { Component } from 'react';
import "./cardVote.css";

class CardVote extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        pedido:""
    }}

    sendVote=()=>{
      this.props.socket.emit("vote",this.props.voteNumber)
      this.props.changeState()
    }  
  
render() {
    return(
      
        
      <div className="card-vote" onClick={this.sendVote}>
          {this.props.voteNumber}
      </div>
      
   
      
      
    );
  }}

export default CardVote;