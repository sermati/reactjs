import React from 'react'
import { Link } from 'react-router-dom'

function Item({ producto }) {
  return (
            <div className="card" style={{width: '18rem'}}>
                <img src={producto.img} className="card-img-top" alt={producto.name} />
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="card-text">Stock: {producto.stock} u | $ {producto.price}</p>
                    <button className="btn btn-sm btn-primary">Agregar al Carrito</button>
                    <Link to={`/item/${producto.id}`} className="btn btn-sm btn-outline-primary ms-3">Detalle</Link>
                </div>
            </div>
  )
}

export default Item