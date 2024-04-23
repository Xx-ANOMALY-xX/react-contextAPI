import { createContext, useContext, useState } from "react"

export const todocontext = createContext(null)

const TodoContext = (props) => {
    const [task, settask] = useState([
        {name: "task", completed: false}
    ])
  return (
    <todocontext.Provider value={[task, settask]}>
        {props.children}
    </todocontext.Provider>
  )
}

export default TodoContext