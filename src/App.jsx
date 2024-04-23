import React, { useContext } from 'react'
import { todocontext } from './Context/TodoContext'

const App = () => {
  const [task, settask] = useContext(todocontext)
  console.log(task)
  return (
    <div>App</div>
  )
}

export default App