import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hadassah from './components/Hadassah'
import Nechami from './components/nechami'

function App() {
  const [count, setCount] = useState(0)

  return (

<div>

  <Hadassah></Hadassah>
  <Nechami></Nechami>
  <div>
    <h2>Hi!</h2>
  </div>
</div>

  )
}

export default App;
