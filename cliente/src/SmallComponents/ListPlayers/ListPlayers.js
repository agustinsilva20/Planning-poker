import React, { Component } from 'react';
import "./ListPlayers.css";
import BoxPlayerName from "../BoxPlayerName/BoxPlayerName"



class ListPlayers extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        pedido:""
    }}


    render() {
      return this.props.users.map(({ username, roomID }) =>
      <BoxPlayerName name={ username } />
      ); 
    }
  
  }
export default ListPlayers;