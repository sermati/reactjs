import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mockFecth } from '../utils/mockFetch'
import Item from './Item'

function ItemListContainer(){

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        if (categoryId) {
            
            mockFecth()
            .then(resp => setProductos(resp.filter(prod => prod.cat === categoryId)))
            .catch(err => console.log(err))
            .finally(() => console.log('Siempre y al ultimo'))

        } else {

            mockFecth()
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => console.log('Siempre y al ultimo'))
            
        }

        
    }, [categoryId])

    return (

        <div className="container">
            {
                productos.length !== 0 ?
                    productos.map( producto => <Item key={producto.id} producto={producto} /> )
                :
                    <h2>Cargando</h2>
            }
        </div>

    )

}

export default ItemListContainer