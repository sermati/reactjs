import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mockFecth } from "../utils/mockFetch"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {

    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        mockFecth(parseInt(id))
            .then(resp => setProduct(resp))
            .catch((err) => console.log(err))
    }, [])

  return (
    <ItemDetail product={product} />
  )

}

export default ItemDetailContainer