import React, {Component} from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { client } from './apollo/Constants'
import { PokemonQuery } from './apollo/Queries'

export default class List extends Component {
  select = null;

  render(){
    return(
      <Query
        query={gql`
        {
          pokemons(first: 151){
            name
            number
          }
        }
      `}>
        {({ loading, error, data }) => {
          if (loading) return <p>Cargando...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <div className="form-group">
              <select ref={(input) => this.select = input} onChange={this.handleChange} className="form-control">
                <option value="">-- Selecciona un pokémon</option>
                {
                  data.pokemons.map((pokemon, key) => {
                    return <option key={key+1} value={pokemon.name}>{pokemon.number}. {pokemon.name}</option>
                  })
                }
              </select>
            </div>
          );
        }}
      </Query>
    );
  }

  handleChange = (evt) => {
    let name = this.select.value;
    
    if(name === ""){
      return;
    }

    client.query({
      query: PokemonQuery,
      variables: {
        name: name
      }
    })
    .then(result => this.props.setPokemon(result.data.pokemon))
    .catch(error => this.props.setError(error.message));
  }
}