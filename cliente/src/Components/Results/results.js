import React, { Component } from 'react';
import "./results.css";
import Voto from "../../SmallComponents/Voto/voto"


class Results extends Component {
    constructor(props){
      super(props);
      this.state={
        estadoSala:"waiting for people"
    }}

   
  
render() {
    return(
      
        
      <div className="results-body">
          <h3 className='votedlbl'>La votacion ha finalizado</h3>
          <div className="container-votos">
            {this.props.users.map(({ username, vote }) =>
             <Voto name={ username } vote={vote}  />
            ) }
            
          </div>
  

          
      </div>
      
   
      
      
    );
  }}

export default Results;