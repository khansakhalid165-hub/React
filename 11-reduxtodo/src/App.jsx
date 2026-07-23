import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './Components/Addtodo'
import Tododos from './Components/Todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo/>
      <Tododos/>
    </>
  )
}

export default App
