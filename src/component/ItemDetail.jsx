import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"


function ItemDetail({ product }) {

    const { addCart } = useCartContext()
    const [isCant, setIsCant] = useState(false)

    const onAdd = (cant) => {
        addCart({ ...product, quantity: cant })
        setIsCant(true)
    }

    return (
        <div className="container">
            <h1 className='mt-3 mb-3'>Detalle {product.name}</h1>
            <div className="row">
                <div className="col">
                    <img className="img-fluid img-thumbnail" src={product.img} />
                    <h2 className="mt-3">{product.name}</h2>
                    <p>Categoria: {product.cat}</p>
                    <p>Stock: {product.stock} u | $ {product.price}</p>
                    {
                        isCant ?
                            <>
                                <ItemCount btnTitle={'Agregar más'} initial={1} stock={product.stock} onAdd={onAdd} />
                                <Link to='/cart' className="btn btn-primary mt-3">Terminar Compra</Link>
                            </>
                        :
                            <ItemCount btnTitle={'Agregar al carrito'} initial={1} stock={product.stock} onAdd={onAdd} />

                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail