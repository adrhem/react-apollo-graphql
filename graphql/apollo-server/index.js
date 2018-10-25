const { ApolloServer, gql } = require('apollo-server');
const {alumnos} = require('./data.js')


const typeDefs = gql`

  type Alumno {
    nombre: String!
    edad: Int
  }

  type Query {
    alumnos: [Alumno]
  }
`;

const resolvers = {
  Query: {
    alumnos: () => alumnos,
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});