
// Promise -> sumilación de api 

// pendiente - hasta que nos devuelve la plata
//  rechazada - Reject - no  te puedo devolver 
// completada - Fullfilled - devolvió la plata

let productos = [
    { id: '1' ,categoria: 'cortadores', name: "producto 1",   price: 37, foto:'https://img.ltwebstatic.com/images3_pi/2022/08/08/1659951732f577ecdb59bab5598b739dd9f17792dd_thumbnail_600x.webp'},
    { id: '2' ,categoria: 'cortadores', name: "producto 2", price: 27, foto:'https://img.ltwebstatic.com/images3_pi/2022/08/08/1659951732f577ecdb59bab5598b739dd9f17792dd_thumbnail_600x.webp'},
    { id: '3' ,categoria: 'cortadores', name: "producto 3",    price: 40, foto:'https://img.ltwebstatic.com/images3_pi/2022/08/08/1659951732f577ecdb59bab5598b739dd9f17792dd_thumbnail_600x.webp'},
    { id: '4' ,categoria: 'variado', name: "producto 4", price: 55, foto:'https://w3r8z3y9.rocketcdn.me/wp-content/uploads/2022/06/Portada-ideas-Pokemon-1400x735.jpg'},
    { id: '5' ,categoria: 'variado', name: "producto 5", price: 11, foto:'https://w3r8z3y9.rocketcdn.me/wp-content/uploads/2022/06/Portada-ideas-Pokemon-1400x735.jpg'},
    { id: '6' ,categoria: 'variado', name: "producto 6", price: 19, foto:'https://w3r8z3y9.rocketcdn.me/wp-content/uploads/2022/06/Portada-ideas-Pokemon-1400x735.jpg'}
   
]

export const gFetch = ()=>{
    return new Promise(( resolve, reject )=>{
        // acciones 
        // reject('REchazado')
        setTimeout(()=>{
            // acciones
            resolve(productos) // tardar 3 segundos 
        }, 1000)
    })
} 


