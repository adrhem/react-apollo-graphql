import React, {Component} from 'react';
import Attack from './Attack';

export default class Pokemon extends Component {
  
  render(){
    if(!this.props.pokemon){
      return (
        <p>No pokémon en props.</p>
      )
    }

    const { pokemon } = this.props;
    return(
      <section className="row">
        <div className="col-md-12">
          <h1 className="text-center"><small>#{pokemon.number}</small> {pokemon.name}</h1>
          <p className="text-center">
            <img src={pokemon.image} alt={pokemon.name} className="img-fluid pokemon-img" />
          </p>
          <p className="text-center">
            <i>{pokemon.classification}</i>
          </p>
          <p className="text-center">
            <strong>Types:</strong> {pokemon.types.join(" ")}
          </p>
          <h3 className="text-center">Attacks</h3>
          <hr />
          <div className="row">
            <div className="col">
              <h4>Special</h4>
              {
                pokemon.attacks.special.map((attack, key) => {
                  return <Attack key={key} attack={attack} />
                })
              }
            </div>
            <div className="col">
              <h4>Fast</h4>
              {
                pokemon.attacks.fast.map((attack, key) => {
                  return <Attack key={key} attack={attack} />
                })
              }
            </div>
          </div>
          {
            pokemon.evolutions && 
            <div className="row">
              <div class="col-md-12">
                <h3 className="text-center">Evolutions</h3>
                <hr />
              </div>
              {
                pokemon.evolutions.map((pokemon, key) => {
                  return (
                    <div className="col">
                      <Pokemon key={key} pokemon={pokemon} />
                    </div>
                  )
                })
              }
            </div>
          }
        </div>
      </section>
    );
  }
}