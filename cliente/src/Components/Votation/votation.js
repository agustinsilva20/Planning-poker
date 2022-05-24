import React, { Component } from 'react';
import "./votation.css";
import CardVote from "../../SmallComponents/CardVote/cardVote"

class Votation extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        pedido:""
    }}

  
render() {
    return(
      
        
      <div className="main-votation">
         <div className='question'>User Story goes here..</div>
         <h3>Select your choice</h3>   
         <div className="voting-cont">
             <CardVote voteNumber="1" socket={this.props.socket} changeState={this.props.changeState}/>
             <CardVote voteNumber="2" socket={this.props.socket} changeState={this.props.changeState}/>
             <CardVote voteNumber="3" socket={this.props.socket} changeState={this.props.changeState}/>
             <CardVote voteNumber="5" socket={this.props.socket} changeState={this.props.changeState}/>
             <CardVote voteNumber="8" socket={this.props.socket} changeState={this.props.changeState}/>
             <CardVote voteNumber="13" socket={this.props.socket} changeState={this.props.changeState}/>
             <CardVote voteNumber="20" socket={this.props.socket} changeState={this.props.changeState}/>
             <CardVote voteNumber="40" socket={this.props.socket} changeState={this.props.changeState}/>
             <CardVote voteNumber="100" socket={this.props.socket} changeState={this.props.changeState}/>
             <CardVote voteNumber="inf" socket={this.props.socket} changeState={this.props.changeState}/>
             <CardVote voteNumber="?" socket={this.props.socket}/>

         </div>
          
      </div>
      
   
      
      
    );
  }}

export default Votation;