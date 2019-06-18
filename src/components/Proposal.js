import React, { Component } from 'react';
import './Proposal.css';
class Proposal extends Component{
  render(){
    return(
      <div className='proposal'>
        <h3>{this.props.customer}</h3>
        <p>Valor: {this.props.value}</p>
        <p>Vendedor: {this.props.seller}</p>
      </div>
    );
  }

}

export default Proposal;