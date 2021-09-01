import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {

  const [list,setList]=useState([])
  const [todo,setTodo]=useState("")
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    
    <div className="input">
      <input onChange={(e)=>setTodo(e.target.value)} value={todo} type="text" placeholder="🖊️ Add item..." />
      
      <i onClick={()=>setList([...list,todo])} className="fas fa-plus"></i>
      
    </div>
    <div className="todos">
      
      
      { list.map((data,index)=>{
        return(<div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{data}</p>
          </div>
          <div className="right">
            <i onClick={(e)=>setList(list.filter((text,e)=>e!==index))} className="fas fa-times"></i>
          </div>
        </div>)}
      )}
    
    
    </div>
  </div>
  )
}

export default App;
