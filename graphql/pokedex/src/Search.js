import React, {Component} from 'react';
import { client } from "./ApolloConstants";
import gql from "graphql-tag";

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
      query: gql`
        query Pokemon($name: String!){
          pokemon(name: $name) {
            id
            number
            name
            attacks {
              special {
                name
                type
                damage
              }
            }
            evolutions {
              id
              number
              name
              weight {
                minimum
                maximum
              }
              attacks {
                fast {
                  name
                  type
                  damage
                }
                special{
                  name
                  type
                  damage
                }
              }
            }
          }
        }
      `,
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