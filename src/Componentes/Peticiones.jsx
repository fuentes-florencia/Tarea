import { useEffect, useState } from "react"

export const Peticiones = ({count}) => {
    const [personaje, setPersonaje] = useState([])

    const obtenerDatos = async () => {
        let respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${count}`)
        let datos = await respuesta.json()
        setPersonaje(datos.results)
    }

    useEffect(() => {
        obtenerDatos()
    }, [count])
    return <>
        {personaje.map((element, index) => {
            return <div key={index}>
                <h2>{element.name} </h2>
                <img src={element.image} alt="" />
                <h2>{element.gender}</h2>
                <h2>{element.species}</h2>
                <h2>{element.status}</h2>

            </div>
        })}

    </>

}