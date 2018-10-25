import React, { Component } from 'react';

export default class Message extends Component {
  state ={
    name: 'Adrián',
    show: false
  }

  constructor(props){
    super(props);

    this.message = this.props.message || "Hello Default";
  }

  render() {
    return (
      <h1>{this.message}, 
      {
        this.state.show && <h1>{this.state.name}</h1>
      }</h1>
    );
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({show: true});
    },2000);
  }
}