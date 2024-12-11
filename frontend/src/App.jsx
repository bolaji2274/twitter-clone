import { useState } from 'react'
import "./App.css"
const Todo = ["Learn React Js", "Learn Devops", "Learn Linux"]
const TodoFun = (props) => {
  return
  <>
   {
        props.Todo.map((element) => {
          return <li style={{color: "green"}}>{element}</li>
        })
      }
  </>
   
}
const Header = (props) => {
  return <div className="header"> {props.message} </div>
}
function App() {

  return (
    <>
    <div className='container'>
      <Header message="Todo List Showdown" />
      {
        Todo.map((element) => {
          return <li style={{color: "green"}}>{element}</li>
        })
      }
    </div>
      <TodoFun Todo />
    </>
  )
}

export default App
