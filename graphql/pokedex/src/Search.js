import React, {Component} from 'react';
import { client } from "./apollo/Constants";
import { PokemonQuery } from './apollo/Queries'

export default class Search extends Component {

  searchInput = null;
  state = {
    search: ''
  };

  render(){
    return(
      <form onSubmit={this.search} className="form-inline">
        <div className="form-group">
          <input type="text" placeholder="Bulbasaur..." ref={(input) => { this.searchInput = input; }}  className="form-control" />
        </div>
        <div className="form-group mx-2">
          <button type="submit" className="btn btn-primary">Aceptar</button>
        </div>
      </form>
    );
  }

  search = (evt) => {
    evt.preventDefault();
    let search = this.searchInput.value;
    
    console.log(search);

    if(search === ""){
      return;
    }

    client.query({
      query: PokemonQuery,
      variables: {
        name: search
      }
    })
    .then(result => {
      console.log(result);
      if(result.data.pokemon){
        this.props.setPokemon(result.data.pokemon)
      }else{
        this.props.setError("No se encontraron resultados :(");
      }
    })
    .catch(error => this.props.setError(error.message));
  }
}