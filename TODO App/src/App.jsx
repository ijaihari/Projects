import { useEffect } from "react";
import { useState } from "react"
import classes from './style.module.css'
import TodoItem from './components/todoitem'
import  ToDoDetails  from "./components/tododetails";
import { Skeleton } from "@mui/material";

function App() {
  const [loading, setloading] = useState(false);
  const [todolist, settodolist] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const [todoDetails, setToDoDetails]= useState(null)
  const[openDialog, setOpenDialog] = useState(false)

  async function fetchListOfTodos() {
    try {
      setloading(true);
      const apiResponce = await fetch('https://dummyjson.com/todos');
      const result = await apiResponce.json();
      console.log(result);
      if (result?.todos && result?.todos.length > 0) {
        settodolist(result?.todos);
        setloading(false);
        setErrorMsg('')
      }
      else {
        settodolist([]);
        setloading(false);
        setErrorMsg('')
      }
    } catch (e) {
      console.log(e);
    }
  }
  async function fetchDetailsofCurrentToDo(getCurrentToDoId) {
    console.log(getCurrentToDoId);
    try {
      const apiResponce = await fetch(`https://dummyjson.com/todos/${getCurrentToDoId}`)
      const details = await apiResponce.json();
      console.log(details);
      if(details){
        setToDoDetails(details)
        setOpenDialog(true)
      }
    } catch (error) {
      setToDoDetails(null)
      setOpenDialog(false)
    }
  }
  useEffect(() => {
    fetchListOfTodos()

  }, [])

  if(loading) return <Skeleton variant="rectangulatr" width={650} height={650}/>
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Daily Tasks</h1>
      <div className={classes.todoListWrapper}>
        {
          todolist && todolist.length > 0 ?
            todolist.map((todoItem, index) => <TodoItem fetchDetailsofCurrentToDo={fetchDetailsofCurrentToDo} todo={todoItem} key={index} />) : null
        }
      </div>
     <ToDoDetails setOpenDialog={setOpenDialog}
      todoDetails={todoDetails} 
      setToDoDetails={setToDoDetails}
       openDialog={openDialog}/>
    </div>
  )
}

export default App
