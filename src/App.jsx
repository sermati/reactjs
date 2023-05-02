import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'

import './App.scss'

import NavBar from './component/NavBar'
import ItemListContainer from './component/ItemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer'
import Error404 from './component/Error404'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import CartContainer from './component/CartContainer'

function App() {

    return (
        <BrowserRouter>

            <CartContextProvider>

                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/cart' element={<CartContainer titulo='Carrito de compras'/>} />
                        <Route path='/category/:categoryId' element={<ItemListContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />} />
                        <Route path='*' element={<Error404 />} />
                        {/* <Route path='*' element={<Navigate to='/' />} /> */}
                    </Routes>
                </div>

            </CartContextProvider>

        </BrowserRouter>
    )
  
}

export default App