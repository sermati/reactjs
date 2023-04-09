import ItemCount from "./ItemCount"

function ItemDetail({ product }) {

    const onAdd = (cant) => {
        console.log(cant)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="img-fluid img-thumbnail" src={product.img} />
                    <h2>{product.name}</h2>
                    <p>Categoria: {product.cat}</p>
                    <p>Stock: {product.stock} u | $ {product.price}</p>
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail