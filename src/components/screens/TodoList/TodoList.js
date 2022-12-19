import React, {useState} from 'react';
import Listik from "./Listik";

const data = [
    {
        _id:1,
        title: 'all buy',
        isComplete: false
    },
    {
        _id:2,
        title: 'all sell',
        isComplete: false
    },
    {
        _id:3,
        title: 'go to sea',
        isComplete: false
    }

]

const TodoList = () => {

    const [todos,setTodos] = useState(data)

    const changeTodos = (id)=>{
        const copy = [...todos]
        const current = copy.find(t=>t._id === id)
        current.isComplete = !current.isComplete
        setTodos(copy)
    }

    const removeTodo = (id)=>{
        const copy = todos.filter(t=>t._id !== id)
        setTodos(copy)
    }


    return (
        <div className='text-white hidden'>
            <h1 className='text-center mb-8 font-bold text-2xl uppercase'>Fackin doooooo this</h1>
            {todos.map((todo)=>(
                <Listik key={todo._id} todo={todo} changeTodos={changeTodos}
                        isComplete={todo.isComplete} removeTodo={removeTodo}/>
            ))}
        </div>
    );
};

export default TodoList;