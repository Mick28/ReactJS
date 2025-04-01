import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bienvenida from './components/ComponenteH1'

// import ComponenteH1 from './components/componenteH1'


function App() {
  const [count, setCount] = useState(0)

  return (

    // <ComponenteH1/>
    <Bienvenida/>
  )
}

export default App
