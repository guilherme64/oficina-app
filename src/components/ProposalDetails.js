import React, { Component } from 'react';

import './ProposalDetails.css';

class ProposalDetails extends Component {

  constructor(props){
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick(){
    this.props.handleModal();
  }
  
  render(){
    return(
      <div className='details'>
        <button onClick ={this.onHandleClick}>Click</button>
        <h2>Details</h2>
        <h3>{this.props.data['customer']}</h3>
        <p>Valor: {this.props.data['value']}</p>
        <p>Vendedor: {this.props.data['seller']}</p>
        <p>{this.props.data['details']}</p>
      </div>
    );
  }
}


export default ProposalDetails;