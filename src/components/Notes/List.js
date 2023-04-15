import React from 'react'
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin: "50px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className=" p-1 h1 text-primary text-center mx-auto display-inline-block">Todos List</h3>
     
      {props.todos.length===0? "No todos ":
      props.todos.map((todo)=>
        {
          return (
            <Todoitem todo = {todo} key={todo.sno}onDelete={props.onDelete}/>
            
          )
      })
    }
    </div>
    
  )
}
