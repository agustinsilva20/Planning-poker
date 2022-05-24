import React, { Component } from 'react';
import "./admin.css";



class Admin extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        pedido:""
    }}

 
render() {
    return(
        <div className='admin-cont'>
            <button className='btn-admin' onClick={this.props.changeState}>Next..</button>
        </div>
        
    
      
   
      
      
    );
  }}

export default Admin;