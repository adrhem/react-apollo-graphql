const { ApolloServer, gql } = require('apollo-server');
const { alumnos } = require('./data.js')

const typeDefs = gql`
  type Alumno {
    nombre: String!
    edad: Int
  }

  type Query {
    alumnos(edad: Int): [Alumno]
    alumno(nombre: String edad: Int): Alumno
  }
`;

const resolvers = {
  Query: {
    alumnos: (_, args) => {
      var edad = args.edad || null;

      if(edad){
        return alumnos.filter((alumno) => alumno.edad == edad);
      }else{
        return alumnos
      }
    },
    alumno: (_, args) => {
      console.log("Argumentos: ", args);

      var nombre = args.nombre || null;
      var edad = args.edad || null;

      if(nombre){
        var results = alumnos.filter( alumno => {
          return alumno.nombre.indexOf(nombre) >= 0;
        });
        console.log("Nombre resultados: " ,results);
        return results.length > 0 ? results[0] : null;

      }else if(edad){
        var results = alumnos.filter( alumno => {
          return alumno.edad == edad;
        });
        console.log("Edad resultados: " ,results);
        return results.length > 0 ? results[0] : null;

      }else{
        return null;
      }
    },
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});