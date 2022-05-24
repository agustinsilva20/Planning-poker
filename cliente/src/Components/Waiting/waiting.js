import React, { Component } from 'react';
import "./waiting.css";

import ListPlayers from "../../SmallComponents/ListPlayers/ListPlayers"



class Waiting extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        pedido:""
    }}

  
render() {
    return(
      
        
      <div className="main-waiting">
          Waiting for Players
          <div className="listOfPlayers">
          <ListPlayers users={this.props.users}/>
          </div>
      </div>
      
   
      
      
    );
  }}

export default Waiting;