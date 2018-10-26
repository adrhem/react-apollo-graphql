import React, {Component} from 'react';

export default class Attack extends Component {
  
  render(){
    if(!this.props.attack){
      return <p></p>
    }

    const { attack } = this.props;
    console.log(attack);
    return(
      <p>
        <i>({attack.type}) </i>
        <strong>{attack.name} </strong> 
        <span>{attack.damage}</span>
      </p>
    );
  }
}