import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer(){

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {

        if (categoryId) {
            
            // TRAER TODOS LOS PRODUCTOS, TODA LA COLECCION PERO FILTRADO
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')

            const queryFilter = query(
                queryCollection,
                where('cat', '==', categoryId)
            )

            getDocs(queryFilter)
                .then(resp => setProducts( resp.docs.map(p => ({ id: p.id, ...p.data() }) ) ))
                .catch(err => console.log(err))
                .finally( () => setIsLoading(false) )

        } else {

            // TRAER TODA LOS PRODUCTOS, TODA LA COLECCION
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')

            getDocs(queryCollection)
                .then(resp => setProducts( resp.docs.map(p => ({ id: p.id, ...p.data() }) ) ))
                .catch(err => console.log(err))
                .finally( () => setIsLoading(false) )

        }

    }, [categoryId])

    return (

        <div className="container">
            {
                isLoading ?
                    <Loading />
                :
                    <ItemList products = {products} />
            }
        </div>

    )

}

export default ItemListContainer