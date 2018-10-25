# Curso React + GraphQL
El objetivo del curso será informar y enseñar de manera simple y práctica el poder de react ejecutandose en un navegador contemporaneo combinado con una de las tecnologías que planea suplantar los webservices REST y hacer más dinamica la manera en que se consultan estos servicios: GraphQL.

# Tabla de contenidos
- [Node.JS](#nodejs)
  - [¿Qué es `node`?](#que-es-node)
  - [¿Qué es `npm`?](#que-es-npm)
  - [La consola es tu amiga](#la-consola-es-tu-amiga)
  - [¿Por qué `yarn`?](#por-que-yarn)
  - [¿Qué es `webpack`?](#que-es-weback)
- [Think in React](#think-in-react)
  - [¿Qué es react?](#que-es-react)
  - [`create-react-app`](#create-react-app)
  - [Components](#components)
  - [The Component Lifecycle](#the-component-lifecycle)
  - [Props](#props)
  - [State](#state)
- [GraphQL](#graphql)
  - [¿Qué es graphql?](#que-es-graphql)
  - [¿Por qué GraphQL?](#por-que-graphql)
  - [Insomnia](#insomnia)
  - [Endpoint](#endpoing)
  - [Types](#types)
  - [Queries](#queries)
  - [Mutations](#mutations)
- [Apollo GraphQL](#apollo-graphql)
- [Contacto](#contacto)

# Node.JS
## ¿Qué es `node`?
JavaScript ejecutado del lado del servidor, tal como lo hace PHP, Ruby y otras tecnologías "backend". 

Vease [nodejs.org](https://nodejs.org/)

## ¿Qué es `npm`?
_Node Package Manager_ de sus siglas en inglés, `npm` es un manejador de dependiencias para node, es decir, un montón de librerías externas controladas de manera homogenea que permite un control simple del proyecto.

## La consola es tu amiga
Bien en estos días estamos acostumbrados a no usar la consola y optar todo el tiempo por las interfaces gráficas,  puede traernos grandes beneficios, por ejemplo:
- Es más rápido ejecutar tareas.
- El desarrollo de paquetes y aplicaciones es más eficiente al no hacer GUIs.
- Cantidad grande de banderas y opciones al ejecutar comandos.
- Te hace sentir rockstar.

Con NPM, por ejemplo, podemos usar comandos simples para crear un proyecto y gestionarlo:

- `npm init`: Crea un proyecto nuevo y crea el archivo `package.json`.
- `npm install`: Descarga las dependencias que están en `package.json`.
- `npm install --save package`: Guarda una dependencia para un proyecto creado en `package.json`.
- `npm remove package`: Borra un paquete previamente instalado en  `package.json`.
- `npm update --save package`: Actualiza un packete previamente instalado en `package.json`.
- `npm run command`: Ejecuta un comando del archivo `package.json`.

## ¿Por qué `yarn`?
Además de `npm` podemos usar otros manejadores de paquetes para node, entre los más famosos está `yarn`. Para instalarlo basta con ejecutar: 

`npm i -g yarn`

¿Pero por qué usar otra cosa si `npm` de por sí es difícil? `yarn` tiene grandes beneficios, el más importante para mi es su manejador de cache, existen proyectos que tienen grandes cantidades de dependencias y creas proyectos como esos todo el tiempo, con yarn es fácil guardar esa caché y no tener que descargar tantos archivos. Además que su sintaxis es más sencilla en muchos aspectos, por ejemplo: 

- `yarn init`: Crea un proyecto nuevo y crea el archivo `package.json`.
- `yarn`: Descarga las dependencias que están en `package.json`.
- `yarn add package`: Guarda una dependencia para un proyecto creado en `package.json`.
- `yarn remove package`: Borra un paquete previamente instalado en  `package.json`.
- `npm upgrade package`: Actualiza un packete previamente instalado en `package.json`.
- `yarn command`: Ejecuta un comando del archivo `package.json`.

Vease [yarnpkg.com](https://yarnpkg.com/)

# ¿Qué es `webpack`?
Webpack es un `static module bundler`, quiere decir que toma muchas dependencias o librerías y genera un (o varios) "kit todo en uno". Es usado en muchos proyectos y modulos de node debido a su capacidad de personalización y configuración.

Vease [webpack.js.org](https://webpack.js.org/)


# Think in React
Lo más problematico para comenzar en react es pensar en _forma react_, existen otros frameworks y bibliotecas populares como jQuery que no tienen muchas similitudes entre sí, es por ello que es importante conocer los conceptos básicos para hacerlo de manera adecuada: _Think in React_

## ¿Qué es React?
React es una biblioteca de JS creada por facebook para crear interfaces de usuario, según su descripción en el sitio oficial. Es usada hoy en día de manera agresiva debido a su escalabilidad y flexibilidad, puedes usar tanto react como tu aplicación lo requiera desde una _One Single Page_ hasta una aplicación completa como instagram o whatsapp. 

Vease [reactjs.org](https://reactjs.org/)

## `create-react-app`
La manera más sencilla de crear una aplicación react es con el comando `create-react-app nombre-app`.

Vease [acebook.github.io/create-react-app](https://facebook.github.io/create-react-app/)

## Components
Los componentes es el _átomo_ de react, son piezas reusables (UI) que permiten comportarse de una manera independiente.

La representación más básica de un componente react sería:

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```


## The Component Lifecycle
Los componentes en React tienen un ciclo de vida, es importante saber cuándo liberar espacio, llamar acciones dependiendo en qué ciclo esté por ejemplo llenar una lista después de haber sido renderizado o hacer validaciones de sus variables antes de renderizar.

Los más básicos son: 

```
class Welcome extends React.Component {

  constructor(props){
    super(props);
    //Soy lo primero en ejecutarse
  }

  componentWillMount(){
    //Me ejecuto antes de renderizar
  }

  render() {
    //Función que hace el renderizado del componente
    return <h1>Hello, World!</h1>;
  }

  componentDidMount(){
    //Me ejecuto después de renderizar
  }

  componentWillUnmount(){
    //Me ejecuto cuando el componente se destruirá
  }

}
```

Existen más y para casos más específicos, pueden consultarse en la documentación de react.


## Props
Los props vendrían siendo los parametros de una función pero para un componente, viene de la palabra propiedades. Son variables que pueden ser pasadas y reusarlas, por ejemplo el nombre y edad de un componente Alumno. Se acceden a los props con la variable de referencia del objeto actual y la palabra props: `this.props.nombre_variable`.

## State
Es una variable propia del componente que está diseñada para cambiar, cualquier valor que se crea tendrá actualizaciones (Como un contador de carrito o un valor dentro de un input). 

Se pueden declarar los states como una variable del componente, pueden irse añadiendo según la lógica lo requiera aunque se recomienda predefinirlos:


```
class Welcome extends React.Component {
  state = {
    nombre: "Adrián",
    var1: 1,
    var2: true,
    var3: []
  }
  render() {
    return <h1>Hello, {this.state.nombre}!</h1>;
  }
}
```

Para hacer una actualización basta con llamar `this.setState({nombre_var: nuevo_valor})`, no se puede llamar en constructor debido a que el componente no ha sido creado aún:

```
class Welcome extends React.Component {
  state = {
    nombre: "Adrián",
    var1: 1,
    var2: true,
    var3: []
  }
  render() {
    return <h1>Hello, {this.state.nombre}!</h1>;
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        nombre: "Julio"
      });
    },5000); //5 segundos
  }
}
```


# GraphQL
## ¿Qué es graphql?
Es un _query language_ para API y un _runtime_ del lado del servidor para ejecutar queries usando un typo que se define previamente manejando la información.

Vease [graphql.org](https://graphql.org/)

## ¿Por qué GraphQL?
Puede ser usado independientemente a un API REST, maneja tipos definidos y predefinidos por lo que hace sencilla su comprensión y facilita traer datos anidados, con relaciones y nativos. Además de ser compatible con muchas tecnologías server-side.

## Insomnia
Es un cliente gráfico para crear peticiones a un API. Es compatible con GraphQL.

Vease [insomnia.rest](https://insomnia.rest/)

## Endpoint
Es el punto final de comunicación, es decir, la url a la que va destinada una petición.

## Types
Dentro de GraphQL es un componente básico que contiene campos y representa un objeto de una colección.

_Por ejemplo:_

```
type Alumno {
  id: ID! #Tipo ID, su intención es no mostrarse y solo ser usada internamente
  nombre: String! #String no nulo
  edad: Int # Entero
  escuela: [Escuela]! # Un objeto también definido
  promedio: Float # Flotante
}

type Escuela {
  nombre: String! 
  esta_activa: Boolean # Tipo booleano
}
```

## Queries
Es un objeto que representa una consulta, puede tener o no argumentos como filtro y recibe un objeto o una lista de objetos:

_Por ejemplo:_

```
#Query de alumnos
{
  alumnos {
    nombre
    edad
  }
}

#Query de alumnos con argumentos
{
  alumnos(nombre: "Adrián") {
    nombre
    promedio
    escuela {
      nombre
      esta_activa
    }
  }
}

```

## Mutations
Representa una modificación de un objeto. Por lo general lleva argumentos y es usada para altas, modificaciones o eliminaciones. 

_Por ejemplo:_

```
#Mutation de alumnos
Mutation ActualizarNombreAlumno($nombre: String!){
  ActualizarNombreAlumno(nombre: $nombre) {
    nombre
    edad
  }
}

```

# Apollo GraphQL
Apollo es una familia de tecnologías para el uso de GraphQL. Tiene un servidor para crear un ambinete que soporte esta tecnología y multiples clientes para varias tecnologías que puedan hacer uso de GraphQL como API.

Vease [apollographql.com](https://www.apollographql.com/)

# Contacto
Pueden escribirme sus dudas a mi telegram: [t.me/adrian_otter](https://t.me/adrian_otter).