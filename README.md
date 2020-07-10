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
