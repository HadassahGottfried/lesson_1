import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hadassah from './components/Hadassah'

function App() {
  const [count, setCount] = useState(0)

  return (

<div>
  <Hadassah></Hadassah>
</div>

  )
}

export default App;
