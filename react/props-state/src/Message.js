import React, { Component } from 'react';

export default class Message extends Component {
  state ={
    name: 'Adrián'
  }

  render() {
    return (
      <h1>{this.props.message}, {this.state.name}</h1>
    );
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({name: 'Julio'});
    },5000);
  }
}