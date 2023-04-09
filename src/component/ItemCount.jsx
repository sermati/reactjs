import { useCount } from '../hooks/useCount'

function ItemCount({initial = 1, stock = 5, min = 1, onAdd}) {
  
    const { contador, increment, decrement, reset } = useCount(1, stock, initial)

    function handleOnAdd(){
        onAdd(contador)
    }

    return (
    <div>
        <span className='fs-3'>Cant: { contador }</span>
        <button className='btn btn-outline-primary ms-2' onClick={increment}>+</button>
        <button className='btn btn-outline-primary ms-2' onClick={decrement}>-</button>
        <button className='btn btn-outline-primary ms-2' onClick={reset}>Reset</button>
        <button className="btn btn-primary ms-2" onClick={handleOnAdd}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount