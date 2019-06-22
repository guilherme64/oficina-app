import React, { Component } from 'react';

import ProposalsList from './ProposalsList';
import ProposalDetails from './ProposalDetails';

class Container extends Component{
  constructor(props){
    super(props);
    this.state = {showModal: false, modalInfo: []};
    this.handleModal = this.handleModal.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
  }

  handleDetails(seller, customer, value, details ){
    this.setState({modalInfo: {seller: seller, customer:customer, value:value, details:details}});
    console.log(this.state.modalInfo);
  }
  handleModal(){
    this.state.showModal ? this.setState({showModal: false}) : this.setState({showModal: true});
    //this.setState({showModal: true});
    console.log('mudou');
  }
  render(){
     if(this.state.showModal){
        return(
          <div>
            <ProposalsList handleModal ={this.handleModal} handleDetails = {this.handleDetails} />
            
            <ProposalDetails data = {this.state.modalInfo} handleModal = {this.handleModal} />
          </div>
        );
      }
       return(
          <div>
            <ProposalsList handleModal ={this.handleModal} handleDetails = {this.handleDetails} />
          </div>
        ); 
  }
}

export default Container;