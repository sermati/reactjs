import { useEffect, useState } from "react"
import { useCartContext } from "../context/CartContext"
import AlertContainer from "./AlertContainer"
import { Link } from "react-router-dom"
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"

function CartContainer(props) {
    const { cartList, clearCart, deleteItem, isEmpty, setIsEmpty, totalQuantity, totalPrice } = useCartContext()
    const [orderSuccess, setOrderSuccess] = useState('hidden')
    const [orderId, setOrderId] = useState('')
    const [validateAlert, setValidateAlert] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    useEffect(() => {
        setIsEmpty(cartList.length < 1 ? true:false)
    },[])

    function getTimestamp(){
        const fecha = new Date();
        return fecha.getTime();
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()){

            setValidateAlert('')

            const order = {
                buyer: formData,
                items: cartList.map( ({id, name, price})=> ({id, name, price}) ),
                total: totalPrice,
                timestamp: getTimestamp()
            }

            const db = getFirestore()
            const queryCollection = collection(db, 'orders')

            // Ingreso order en bd
            addDoc(queryCollection, order)
                .then( resp => {setOrderId(resp.id)} )
                .catch(err => setOrderSuccess('error'))
                .finally(()=>{
                    clearCart()
                    setOrderSuccess('success')
                })

        }else{
            setValidateAlert(<div className="form-text">Los correos no coinciden</div>)
        }

    }

    let alertOrder
    if (orderSuccess === 'success'){
        alertOrder = <AlertContainer alertType={'success '} message={'Se genero correctamente tu compra id: ' + orderId} />
    }else if (orderSuccess === 'error'){
        alertOrder = <AlertContainer alertType={'danger'} message={'Hubo un error al procesar la compra'} />
    }else{
        alertOrder = ''
    }

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = () => {
        return (formData.email === document.getElementById('email2').value)
    }

    return (
        <div className="container">
            <h1 className="mt-3">{props.titulo}</h1>
            { alertOrder }
            { isEmpty ?
                
                <>
                <AlertContainer alertType={'secondary'} message={'El carrito esta vacio'} />
                <Link to='/' className="btn btn-primary">Ir a la Tienda</Link>
                </>

            :
                <>
                <ul className="list-group">
                    { cartList.map(p => (
                    <li key={p.id} className="list-group-item">
                        <img src={p.img} alt={p.name} width={100} />
                        <span className="ms-3">Cat: {p.cat} - {p.name} ${p.price} - Cant: {p.quantity} 
                            <button className="btn btn-danger ms-3" onClick={() => deleteItem(p.id) }>
                                X
                            </button>
                        </span>
                    </li>
                    )) }
                    
                </ul>
                <ul className="list-group mt-3">
                    <li className="list-group-item">Total $ { totalPrice }</li>
                </ul>
                <button className="btn btn-dark mt-3" onClick={clearCart}>Vaciar Carrito</button>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                        <input
                            type="text"
                            id="name" 
                            name="name"
                            className="form-control"
                            placeholder="Escribe tu nombre y apellido"
                            onChange={handleOnChange}
                            value={formData.name}
                            required
                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input
                            type="number"
                            id="phone" 
                            name="phone"
                            className="form-control"
                            placeholder="Escribe tu numero de teléfono"
                            onChange={handleOnChange}
                            value={formData.phone}
                            required
                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email" 
                            name="email" 
                            className="form-control"
                            placeholder="Escribe tu email"
                            onChange={handleOnChange}
                            value={formData.email}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            id="email2"
                            name="email2"
                            className="form-control"
                            placeholder="Escribe nuevamente tu email"
                            required
                        />
                    </div>
                    { validateAlert }
                    <button className="btn btn-primary mt-3">Realizar Compra</button>
                </form>
                </>

            }

        </div>
    )
}

export default CartContainer