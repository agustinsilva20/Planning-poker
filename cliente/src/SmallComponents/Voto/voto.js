import React, { Component } from 'react';
import "./voto.css";

class Voto extends Component {
    constructor(props){
      super(props);
      this.state={
        estadoSala:"waiting for people"
    }}

  
render() {
    return(
      
        
      <div className="voto-cont">

        <h2 className='nameVoto'>{this.props.name}</h2>
        <h2 className='numeroVoto'>{this.props.vote}</h2>
    

          
      </div>
      
   
      
      
    );
  }}

export default Voto;