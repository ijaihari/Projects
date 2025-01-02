import { useEffect } from "react";
import { useState } from "react"
import { todoitem } from "./components/tododetails";
import classes from './style.module.css'

function App() {
  const [loading, setloading] = useState(false);
  const [todolist, settodolist] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  async function fetchListOfTodos() {
    try {
      setloading(true);
      const apiResponce = await fetch('https://dummyjson.com/todos'); 
      const result = await apiResponce.json();
      console.log(result);
      if(result?.todos && result?.todos.length >0)
      {
        settodolist(result?.todos);
        setloading(false);
        setErrorMsg('')
      }
      else{
         settodolist([]);
         setloading(false);
         setErrorMsg('')
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchListOfTodos()
    
  }, [])
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>ToDo App Using Material UI</h1>
    <div>
      {
        
      }
    </div>
    </div>
  )
}

export default App
