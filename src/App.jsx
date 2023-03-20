import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'

import './App.scss'

import NavBar from './component/NavBar'
import ItemListContainer from './component/ItemListContainer'

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo='Articulos en carrito' />
      <div className="container">
        
        <h1>Bienvenido a la tienda online.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quaerat asperiores.</p>

      </div>
    </div>
  )
  
}

export default App