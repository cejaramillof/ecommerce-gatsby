import React from 'react'
import { SEO } from '../components'
import { Purchase, Button } from '../styles/components'
import { Link } from 'gatsby';

export default function Gracias() {
  return (
    <div>
      <SEO title='Compra exitosa' />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes tu swag, lucelo con orgullo</p>
        <p>¡Te esperamos de vuelta!</p>
        <span rol='img' aria-label='emoji'>♥️</span>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
