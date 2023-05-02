import { useEffect, useState } from "react"
import { useCartContext } from "../context/CartContext"

function CartWidget() {

    const { cartList, counter, setCounter } = useCartContext()
    

    useEffect(() => {
        
            let result = 0
            cartList.forEach(p => {
                result += p.quantity
            })
            setCounter(result)
        
        
    },[counter])

    return (

        <div className="d-flex">
            <i className="fa-solid fa-cart-shopping"></i> <span className="badge bg-primary rounded-pill">{counter}</span>
        </div>

    )

}

export default CartWidget