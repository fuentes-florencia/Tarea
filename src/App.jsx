import { useState } from 'react'
import './App.css'
import './Componentes/InputButton'
import { InputButton } from './Componentes/InputButton'

function App() {
  const [count, setCount] = useState('')
console.log (count)
  return (
    <>
    <InputButton addTasks={setCount} />
    </>
  )
}

export default App
