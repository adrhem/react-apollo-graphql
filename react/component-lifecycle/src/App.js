import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    console.log("1. constructor");
  }

  componentWillMount(){
    console.log("2. componentWillMount");
  }

  render() {
    console.log("3. render");
    return (
      <h1>Hello, World!</h1>
    );
  }

  componentDidMount(){
    console.log("4. componentDidMount");
  }

  componentWillUnmount(){
    console.log("5. componentWillUnmount");
  }

}

export default App;
