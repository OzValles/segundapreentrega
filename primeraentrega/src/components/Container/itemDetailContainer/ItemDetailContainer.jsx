import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const {detaliId} = useParams()
    console.log(detaliId)

    // useEffec(solicitud(id))
    return (
        <div>ItemDetailContainer {detaliId} </div>
    )
}

export default ItemDetailContainer
