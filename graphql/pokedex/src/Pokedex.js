import React, {Component} from 'react';
import List from './List'
import Search from './Search'
import Pokemon from './Pokemon'

export default class Pokedex extends Component {
  state = {
    selected_pokemon: null,
    error: ''
  };

  render(){
    return(
      <section className="container">
        <div className="row pt-5">
          <div className="col-sm-4">
            <List setPokemon={this.setPokemon} setError={this.setError} />
          </div>
          <div className="col-sm-8">
            <Search setPokemon={this.setPokemon} setError={this.setError} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {
              this.state.selected_pokemon && !this.state.error && <Pokemon pokemon={this.state.selected_pokemon} />
            }
            {
              !this.state.selected_pokemon && this.state.error && <p>{this.state.error}</p>
            }
          </div>
        </div>
      </section>
    );
  }

  setPokemon = pokemon => {
    this.setState({
      selected_pokemon: pokemon
    })
  }

  setError = error => {
    this.setState({
      error: error
    })
  }
}