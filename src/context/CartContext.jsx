import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

// Componente para enmascarar el contexto
export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [counter, setCounter] = useState(0)
    const [isEmpty, setIsEmpty] = useState(true)
    
    const addCart = (newProduct) => {

        const indexProduct = cartList.findIndex(product => product.id === newProduct.id) // si no existe devuelve -1 y sino el index encontrado

        if (indexProduct === -1) {

            setCartList([...cartList,newProduct])
            setCounter(newProduct.quantity)

        } else {
            cartList[indexProduct].quantity += newProduct.quantity
            setCartList( [ ...cartList ] )
            setCounter(cartList[indexProduct].quantity)

        }

    }

    const totalQuantity = cartList.reduce((totalQuantity, p) => totalQuantity += p.quantity, 0)
    const totalPrice = cartList.reduce((totalPrice, p) => totalPrice += (p.price * p.quantity), 0)

    const clearCart = () => {
        setCartList([])
        setCounter(0)
        setIsEmpty(true)
    }

    const deleteItem = (id) => {
        let filterCart = cartList.filter(p => p.id !== id)
        setCartList(filterCart)
        setCounter()
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addCart,
            clearCart,
            counter,
            setCounter,
            deleteItem,
            isEmpty,
            setIsEmpty,
            totalQuantity,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>

    )

}