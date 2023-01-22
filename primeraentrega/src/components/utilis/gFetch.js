
let productos = [
    { id: '1', categoria: 'remera', name: 'producto 1', price: 36 },
    { id: '2', categoria: 'remera', name: 'producto 2', price: 36 },
    { id: '3', categoria: 'remera', name: 'producto 3', price: 36 },
    { id: '4', categoria: 'gorra', name: 'producto 4', price: 36 },
    { id: '5', categoria: 'gorra', name: 'producto 5', price: 36 },
    { id: '6', categoria: 'gorra', name: 'producto 6 ', price: 36 },
    { id: '7', categoria: 'gorra', name: 'producto 7 ', price: 36 },
    { id: '8', categoria: 'gorra', name: 'producto 8 ', price: 36 }
]

export const gFetch = () =>{
    return new Promise((resolve, reject) => {
    // acciones
    setTimeout(() => {
        resolve(productos)
    }, 3000)

})
}
