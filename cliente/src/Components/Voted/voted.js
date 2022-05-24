import React, { Component } from 'react';
import "./voted.css";

class Voted extends Component {
    constructor(props){
      super(props);
      this.state={
        estadoSala:"waiting for people"
    }}

  
render() {
    return(
      
        
      <div className="voted-body">
          <h3 className='votedlbl'>Tu voto ha sido procesado</h3>
          <p>Pronto estaran los resultados..</p>
  

          
      </div>
      
   
      
      
    );
  }}

export default Voted;