let products = [
    {id: 1, cat: 'Relojes', name: 'Reloj 1', stock: 50, price: 100, img:'../../public/img404.jpg'},
    {id: 2, cat: 'Relojes', name: 'Reloj 2', stock: 50, price: 100, img:'../../public/img404.jpg'},
    {id: 3, cat: 'Relojes', name: 'Reloj 3', stock: 50, price: 100, img:'../../public/img404.jpg'},
    {id: 4, cat: 'Celulares', name: 'Celular 1', stock: 50, price: 100, img:'../../public/img404.jpg'},
    {id: 5, cat: 'Celulares', name: 'Celular 2', stock: 50, price: 100, img:'../../public/img404.jpg'},
    {id: 6, cat: 'Bolsos', name: 'Bolso 1', stock: 50, price: 100, img:'../../public/img404.jpg'},
    {id: 7, cat: 'Bolsos', name: 'Bolso 2', stock: 50, price: 100, img:'../../public/img404.jpg'}
]

export let mockFecth = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(id ? products.find(prod => prod.id === id) : products)
        }, 50)
    } )
}

export let mFecthOne = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products[0])
        }, 50)
    } )
}