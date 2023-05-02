import Item from './Item'

function ItemList({ products }) {

    return (
        <>

            <h1 className='mt-3'>Productos</h1>
            { products.map( product => <Item key={product.id} producto={product} /> ) }

        </>
    )

}

export default ItemList