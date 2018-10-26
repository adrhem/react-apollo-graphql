import gql from "graphql-tag";

const PokemonQuery = gql`
  query Pokemon($name: String!){
    pokemon(name: $name) {
      number
      name
      types
      classification
      image
      attacks {
        special {
          name
          type
          damage
        }
        fast {
          name
          type
          damage
        }
      }
      evolutions {
        number
        name
        types
        classification
        image
        attacks {
          special {
            name
            type
            damage
          }
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }`;

export {PokemonQuery};