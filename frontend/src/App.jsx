import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventSourceComponent from './Components/EventSourceComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EventSourceComponent />
    </>
  )
}

export default App
