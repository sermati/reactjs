import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'

import './App.scss'

import NavBar from './component/NavBar'
import CartItems from './component/CartItems'
import ItemListContainer from './component/ItemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer'
import Error404 from './component/Error404'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <CartItems titulo='Articulos en carrito' />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path='*' element={<Error404 />} />
                    {/* <Route path='*' element={<Navigate to='/' />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    )
  
}

export default App