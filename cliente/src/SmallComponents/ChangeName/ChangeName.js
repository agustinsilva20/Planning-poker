import React, { Component } from 'react';
import "./ChangeName.css";




class ChangeName extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        pedido:""
    }}



    changeName=(value)=>{
      this.props.modify(value)
    
    }
    render() {
        return(
        <div className="changeName">
            <p class="yourname">Your name: </p>
            <input type="text" className="txt" value= {this.props.name} onChange={e => this.changeName(e.target.value)}/>
            <button className="btn-admin btn-cn" onClick={this.props.sendEventNewName}>Change Name</button>
        </div>)
      
    }
  
  }
export default ChangeName;