/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// import React from 'react'
// import Layout from './src/components/layout'

// export function wrapRootElement({element}) { return (<Layout>{element}</Layout>)}
// exports.wrapRootElement = ({element}) => (<Layout>{element}</Layout>)

// for development
const React = require('react')
const Layout = require('./src/components/layout').default
const { GlobalStyles } = require("./src/styles")
const { CartProvider } = require("./src/context")

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
