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
  - [Ref](#ref)
  - [State](#state)
- [GraphQL](#graphql)
  - [¿Qué es graphql?](#que-es-graphql)
  - [¿Por qué GraphQL?](#por-que-graphql)
  - [[Insomnia](#insomnia)
  - [Endpoint](#endpoing)
  - [Types](#types)
  - [Queries](#queries)
  - [Arguments](#arguments)
  - [Mutations](#mutations)
- [Apollo GraphQL](#apollo-graphql)

# Node.JS
## ¿Qué es `node`?
JavaScript ejecutado del lado del servidor, tal como lo hace PHP, Ruby y otras tecnologías "backend". Vease [nodejs.org](https://nodejs.org/)

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

Vease: [yarnpkg.com](https://yarnpkg.com/)

# ¿Qué es `webpack`?
Webpack es un `static module bundler`, quiere decir que toma muchas dependencias o librerías y genera un (o varios) "kit todo en uno". Es usado en muchos proyectos y modulos de node debido a su capacidad de personalización y configuración.

Vease: [webpack.js.org](https://webpack.js.org/)