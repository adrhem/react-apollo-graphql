import React, { Component } from 'react';

export default class Exponente extends Component {
  constructor(props){
    super(props);
    this.state = {
      resultado: props.numero
    }
    this.numero = props.numero;
  }

  render() {
    return (
      <h1>{this.state.resultado}</h1>
    );
  }

  componentWillMount(){
    setInterval(() => {
      let {resultado} = this.state;
      resultado = resultado * this.numero;
      this.setState({resultado: resultado});
    },2000);
  }
}