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
        <header className='details--header'>
          <h2 className='details--header'>Detalhes</h2>
          <button className=' details--header details--header__btn'onClick ={this.onHandleClick}>Fechar</button>
        </header>
        <section className='details--section'>
          <h3 className='details--section__title'>{this.props.data['customer']}</h3>
          <p>Valor: {this.props.data['value']}</p>
          <p>Vendedor: {this.props.data['seller']}</p>
          <p className='details--section__description'>{this.props.data['details']}</p>
        </section>
        
      </div>
    );
  }
}


export default ProposalDetails;