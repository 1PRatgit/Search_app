
import Header from "./Header";
import {Todos} from "./Todos";
import { AddTodo } from './AddTodo';
import { Routes ,Route } from 'react-router-dom';

import React,{useState,useEffect} from 'react';
import{
  BrowserRouter as Router,
}from "react-router-dom";

const Index= () => {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>
    {
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title,desc)=>{
    console.log("adding task",title,desc)
    let sno;
    if(todos.length===0)
    {
      let sno = 0;
    }
    else{
      let sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
  }
  const [todos,setTodos]=useState(initTodo);
  
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
    console.log(hit);
    <Router>
      <Routes>
        <Route path="/" element={ 
        <>
          < AddTodo addTodo={ addTodo }/>
          <Todos todos={todos} onDelete={onDelete}/>
        </>}>
      </Route>
        
      </Routes> 
      
    </Router>
      
    </>
  );
}


export default Index
