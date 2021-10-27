import React, { useEffect } from 'react'
import "./Todos.css"

function Todos(props) {
    console.log(props)
    const {setState}=props
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data) => {
                const ficFirstData=data.slice(0,6)
                setState(state=>({...state , todos:ficFirstData}))
            }
                )
    }, [])
    const renderTodos=()=>{
        return props.todos.map(todo=>{
            return(
                <li className="todos-widget-item" key={todo.id}>{todo.title}</li>
            )
        })
    }
    return (
        <div className="todos-widget">
         <ul className="todos-widget" >{renderTodos()}</ul>  
        </div>
    )
}

export default Todos
