import React, {useState} from 'react';
import TodoItem from "./Item/TodoItem";
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
    {
        _id:34234,
        title: 'Finish the essay collaboration',
        isCompleted: false
    },
    {
        _id:3423433,
        title: 'Read nest chapter og the book',
        isCompleted: false
    },
    {
        _id:342344434,
        title: 'Send the finished assignment',
        isCompleted: false
    }
]


const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id)=>{
        const copy = [...todos]
        const current = copy.find(t=>t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id)=>{
        setTodos([...todos].filter(t=>t._id !==id))
    }

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold mb-10 text-center'>Todo for junior</h1>
            {todos.map(todo =>(
                <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo ={removeTodo}/>
            ))}
            <CreateTodoField setTodos={setTodos}/>
        </div>
    );
};

export default Home;