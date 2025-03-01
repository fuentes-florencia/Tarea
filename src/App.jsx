import { useState } from 'react'
import './App.css'
import './Componentes/InputButton'
import { InputButton } from './Componentes/InputButton'
import { Peticiones } from './Componentes/Peticiones'

function App() {
  const [count, setCount] = useState('')

  return (
    <>
    <InputButton addTasks={setCount} />
    <Peticiones count={count} />
    </>
  )
}

export default App
