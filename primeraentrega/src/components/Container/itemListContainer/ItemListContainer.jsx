import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../../utilis/gFetch'

// Promise -> simulacion de una api
//3 estados posibles tiene una promesa

//pendiente - hasta que nos devuelve algo
//rechazada (reject) - no va a devolver nada 
// completada - Fullfilled - devuelve algo 


export const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([])
    /* const [boolean,setBoolean] = useState(false) */
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {

        
            gFetch() //asincrono
                .then(respuestaPromesa => {

                    //return respuestaPromesa.json()
                    setProductos(respuestaPromesa)

                })
                //.then(respuestaPromesa2 => console.log(respuestaPromesa2))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

       
    }, [])



    console.log(categoryId)
    // [1,2,3,4,5] -> map -> [ <li> 1</li>,<li>2 </li>,<li>3 </li>,<li>4 </li>,<li> 5</li>]
    return (
        <div className='container'>
            {/* <h2>{saludo} </h2> */}

            {loading
                ?
                <center>
                    <h1>Cargando...</h1>
                </center>
                :
                <div style={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }
                }>


                    {
                        productos.map(producto =>
                            <div key={producto.id} className='card w-25 mt-5 shadow' >
                                <div className='card-head'>
                                    {producto.name}
                                </div>
                                <div className='card-body'>
                                    <h6> Precio: {producto.price}</h6>
                                </div>
                                <div className='card-footer'>
                                    <Link to={`/detail/${producto.id}`}>
                                        <button className='btn btn-outline-dark w-100'> Ir a detalles</button>
                                    </Link>

                                </div>



                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

 //para mostrar algo en la pantalla necesitamos la funcion map
// el key es algo para identificarlo como unico 

