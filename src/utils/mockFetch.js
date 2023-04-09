let productos = [
    {id: 1, cat: 'Relojes', name: 'Reloj 1', stock: 50, price: 100, img:'https://source.unsplash.com/category/technology'},
    {id: 2, cat: 'Relojes', name: 'Reloj 2', stock: 50, price: 100, img:'https://source.unsplash.com/category/technology'},
    {id: 3, cat: 'Relojes', name: 'Reloj 3', stock: 50, price: 100, img:'https://source.unsplash.com/category/technology'},
    {id: 4, cat: 'Celulares', name: 'Celular 1', stock: 50, price: 100, img:'https://source.unsplash.com/category/technology'},
    {id: 5, cat: 'Celulares', name: 'Celular 2', stock: 50, price: 100, img:'https://source.unsplash.com/category/technology'},
    {id: 6, cat: 'Bolsos', name: 'Bolso 1', stock: 50, price: 100, img:'https://source.unsplash.com/category/technology'},
    {id: 7, cat: 'Bolsos', name: 'Bolso 2', stock: 50, price: 100, img:'https://source.unsplash.com/category/technology'}
]

export let mockFecth = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        }, 1700)
    } )
}

export let mFecthOne = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos[0])
        }, 1400)
    } )
}