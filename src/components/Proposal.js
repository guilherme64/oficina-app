import React, { Component } from 'react';
import './Proposal.css';
class Proposal extends Component{
  constructor(props){
    super(props);
    this.state = { active: false}
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    /*
    this.state.active === false? this.setState({active: true}) : this.setState({active: false});
    console.log(this.state.active);*/
  }
  
  render(){
    //if(!this.state.active){
      return(
        <div className='proposal' key={this.props.id} onClick={this.onClick}>
        <h3>{this.props.customer}</h3>
        <p>Valor: {this.props.value}</p>
        <p>Vendedor: {this.props.seller}</p>
      </div>
      );
    /*}else{
      return(
        <div className='proposal-modal' key={this.props.id} onClick={this.onClick}>
          <h3>{this.props.customer}</h3>
          <p>Valor: {this.props.value}</p>
          <p>Vendedor: {this.props.seller}</p>
          <p>{this.props.description}</p>
        </div>
      );
    }*/ 
  }
}

export default Proposal;