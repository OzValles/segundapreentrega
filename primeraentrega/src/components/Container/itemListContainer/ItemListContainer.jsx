import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../../utilis/gFetch'

export const ItemListContainer  = ( {saludo} ) => {  
    const [productos, setProductos] = useState([]) 
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(()=>{
        if (categoryId) {
            gFetch()// asincrinónico
                .then(respuestaPromesa => {
                    // throw new Error('Error generado a la fuerza')            
                   setProductos(respuestaPromesa.filter(items => items.categoria === categoryId))
                })        
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))               
            
        } else {
            gFetch()// asincrinónico
                .then(respuestaPromesa => {
                    // throw new Error('Error generado a la fuerza')            
                   setProductos(respuestaPromesa)
                })        
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))               
        }
    }, [categoryId])
    
    
    console.log(categoryId) 
    // [1,2,3,4,5] -> map -> [ <li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>]
    return (
        <div className='container'> 
            {/* <h2>{saludo}</h2>  */}
            
            {   loading 
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
                       /* A map function that is iterating over the productos array and returning a div
                       for each producto. */
                        productos.map( producto =>  <div className='col-4 p-2 mt-5'>
                                                        <div key={producto.id} className='card w-100 text-center shadow'>
                                                            <div className='card-head'>
                                                                {producto.name}
                                                            </div>
                                                            <div className='card-body'>
                                                                <img src={producto.foto} className='w-100' />
                                                                    <h6> Categoría: {producto.categoria}</h6>
                                                                    <h6>Precio: {producto.price}</h6>
                                                            </div>
                                                            <div className='card-footer'>
                                                                <Link to={`/detail/${producto.id}`}>
                                                                    <button className='btn btn-outline-dark w-100' >Ir a Detalle</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                    ) 
                    }
                </div>
                    
            }
        </div>
    )
}

