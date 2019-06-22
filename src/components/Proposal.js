import React, { Component } from 'react';
import './Proposal.css';


class Proposal extends Component{
  constructor(props){
    super(props);
    this.state = { active: false}
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.handleModal();
    this.props.handleDetails(this.props.seller, 
    this.props.customer,
    this.props.value,
    this.props.description);
  }
  
  render(){
      return (
        <div className='proposal' key={this.props.id} onClick={this.onClick}>
          <h3>{this.props.customer}</h3>
          <p>Valor: {this.props.value}</p>
          <p>Vendedor: {this.props.seller}</p>
        </div>
      );
  }
}

export default Proposal;