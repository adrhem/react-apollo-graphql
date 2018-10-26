import React, {Component} from 'react';
export default class Pokemon extends Component {

  render(){
    if(!this.props.pokemon){
      return (
        <p>No pokémon en props.</p>
      )
    }

    return(
      <section className="row">
        {
          JSON.stringify(this.props.pokemon)
        }
      </section>
    );
  }
}