# Alternative to JamStack

# ¿Qué es Gatsby?
Gatsby es un framework open source increíblemente rápido, Trabaja con un stack innovador, ya que integra tecnologías como React y GraphQL con diferentes fuentes de información como WordPress o Sanity.io. Su velocidad se debe a que compila la aplicación mientras desarrollamos para que el sitio en producción obtenga todos los beneficios de las Single Page Applications y el Server Side Rendering.

Gatsby usa GraphQL para recolectar la información de nuestro sitio web desde diferentes fuentes: APIs, CMS o nuestro sistema de archivos. Y teniendo lista la información, (como en SSR) renderiza nuestras vistas en React.js para construir sitios estáticos muy optimizados.

Entre muchas otras aplicaciones, la documentación oficial de React.js está construida con Gatsby: Reactjs.org.

1. En tiempo de construcción
- - Plugin(s) (Obtener datos) -> Sitio de Gatsby -> Componente(s) -> Gatsby y webpack generan el sitio estático.

1. En tiempo de ejecución:
- - Sitio Estático

## SPA
Request -> Servidor (Retorna 1 HTML, y un archivo enorme de JS) (Con este JS Arma las vistas)
- El 1 sólo archivo resta puntos en CEO.
- Es más lenta la carga inicial

## SSR
Request -> Servidor (1 HTML, con 1 JS con lo que necesita esta página para funcionar) (Se repite por cada vista)
- Mejora la carga inicial
- La navegación es un poco lenta

## Gatsby
Node (react + graphql + webpack) -> Genera 1 sitio estático (multiples html y js) -> Por cada petición, trae los nuevos estaticos pero en segundo plano y no recarga la página.

# Start Proyect
**Manual**
`npm init -y`
`npm i react gatsby react-dom`
`gatsby develop`

**CLI**
`npm install -g gatsby-cli`
`gatsby new projectName`

*Starter*
`gatsby new projectName creador/nombreDelStarter`

**Folders**
- src
- - pages
- - index.js (first rfc)

**eslint**
`npm i -D -E eslint`
`npx eslint --init` `./node_modules/.bin/eslint --init`


# Config
- `npm i -S -E styled-components react-helmet prop-types gatsby-transformer-sharp gatsby-source-filesystem gatsby-plugin-sharp gatsby-plugin-react-helmet gatsby-plugin-offline gatsby-plugin-manifest gatsby-image`
- create `gatsby-config.js`
- create base commands `package.json`

**gatsby-config.js**
Project info, metadata, and plugins config

**gatsby-browser.js**
APIs o métodos predefinidos para ejecutarse en el browser, ej: para añadir vistas, librerías, contextapi, redux, googlemaps.

**gatsby-node.js**
Configurasión de construcción sitio web con Gatsby.Generar vistas en función de información proveniente de GraphQL, o APIs externas. (Generando nuestos propios plugins de fuentes de datos)

## Plugins
## Plugins como Componentes:
Cuando instalamos el plugin obtenemos un componente que debemos integrar a nuestra aplicación para obtener algún beneficio.

## Plugins como Funcionalidades:
Nos ayudan a transformar información o implementar una funcionalidad en concreto. Por ejemplo: gatsby-image nos ayuda a crear nuevas versiones de nuestras imágenes con menor calidad para mejorar la carga inicial de nuestro sitio web.

## Plugins como Fuente de Datos:
Estos plugins utilizan Node.js y GraphQL para consumir la información de algún lugar o herramienta como Firebase, WordPress, APIs Rest, entre otras.

# GraphQL
GraphQL es un lenguaje tipado que facilita la comunicación entre servicios, pero los datos de nuestra aplicación pueden venir de diferentes lugares, así que GraphQL no tiene forma de acceder a todos estos datos para que podamos consumirlos desde un mismo lugar.
Gatsby recolecta toda la información de nuestra aplicación mientras desarrollamos en local y la almacena en un servidor de GraphQL. Luego, en la etapa de compilación, justo antes de pasar a producción, Gatsby guardará los datos de GraphQL junto al código, de esta forma los tendremos disponibles sin necesidad de hacer peticiones a las fuentes de datos originales.

On develop can test queries on Graphql server called Graphiql (default) or playground
Queries only can be executed on pages. or in other pages with *static query*

```GraphQL
query {
  allFile {
    totalCount
  }
}
```

## Al trabajar con plugins de fuentes de datos en gatsby:

### Edges (conexiones)
No podemos consumir la información de estos plugins de la misma forma que otras consultas de GraphQL. En estos casos, la propiedad edges nos hace referencia a la conexión directa entre estos plugins y el servidor de GraphQL.

### Nodos (node or nodes)
Son los elementos individuales de información que obtenemos al hacer una consulta con la propiedad edges.

Por ejemplo: Para conseguir la información del nuestras imágenes (guardadas en la carpeta src/images) usamos el plugin gatsby-source-filesystem.

En este caso podemos acceder a la información de nuestras imágenes con la siguiente consulta de GraphQL:

```GraphQL
query {
  allFile {
    edges {
      node {
         name
         relativePath
      }
    }
  }
}
```

La propiedad relativePath es relativa a la propiedad path de nuestra configuración del plugin gatsby-source-filesystem en el archivo gatsby-config.js.

Podemos acceder a la metadata que configuramos en el archivo gatsby-config.js ejecutando la siguiente consulta en GraphQL:

```GraphQL
query {
  allSite {
    edges {
      node {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  }
}
```


`npm install dotenv gatsby-plugin-stripe gatsby-plugin-styled-components gatsby-plugin-typography gatsby-source-stripe prop-types react-typography typography`