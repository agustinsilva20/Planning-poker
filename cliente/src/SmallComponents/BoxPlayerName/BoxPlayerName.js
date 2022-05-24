import React, { Component } from 'react';
import "./BoxPlayerName.css";



class BoxPlayerName extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        pedido:""
    }}

  
render() {
    return(
      
        
      <div className="box">
          <p>{this.props.name}</p>
      </div>
      
   
      
      
    );
  }}

export default BoxPlayerName;