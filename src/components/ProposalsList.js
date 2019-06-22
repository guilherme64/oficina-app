import React, { Component } from 'react';
import './ProposalsList.css';

import Proposal from './Proposal';

class ProposalsList extends Component{
  constructor(props){
    super(props);
    this.state = {clients: null}
  }

  componentDidMount(){
    console.log('carregou');
    fetch('https://my-json-server.typicode.com/codificar/oficina/proposals')
    .then(res=>res.json())
    .then(data => {
      let proposals = data.map(proposal=>{
        return(
          <Proposal key={proposal.id}
          seller={proposal.seller} 
          customer={proposal.customer}
          value={proposal.value}
          description = {proposal.description}
          handleModal = {this.props.handleModal}
          handleDetails = {this.props.handleDetails}
          />
        );
      });
      this.setState({proposals: proposals});
    }); 
  }
  render(){
    return(
      <div >
         <h2>
          Lista de Clientes
        </h2>
        <ul className='flex'>
          {this.state.proposals}
        </ul>
      </div>
    );
  }
}

export default ProposalsList;