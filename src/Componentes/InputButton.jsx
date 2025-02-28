import { useRef, useState } from "react"

export const InputButton = ({ addTasks }) => {
    const inputRef = useRef()

    return <>
    <input ref={inputRef} type="text" />
    <button onClick={()=> {addTasks(inputRef.current.value)}}> agregar</button>
    </>
}