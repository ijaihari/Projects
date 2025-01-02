import { useEffect } from "react";
import { useState } from "react"


function App() {
  const [loading, setloading] = useState(false);
  const [todolist, settodolist] =useState([]);
  
  useEffect(()=>{
    fetchListOfTodos()
  },[])
  return (
    <div>
      <h1>ToDo App Using Material UI</h1>
    </div>
  )
}

export default App
