import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import AlertContainer from "./AlertContainer"

function ItemDetailContainer() {

    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {

        // TRAER UN PRODUCTO
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', id)
        getDoc(queryDoc)
            .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
            .catch(err => console.log(err))

    }, [])

    //console.log(product.name);
    
  return (
    <>
    {
        product.name === undefined ?
            <div className="container mt-3">
                <AlertContainer alertType={'danger'} message={'No existe este articulo'} />
            </div>
        :
            <ItemDetail product={product} />
    }
    </>
  )

}

export default ItemDetailContainer