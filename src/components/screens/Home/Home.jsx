import React, {useState} from 'react';
import TodoItem from "./Item/TodoItem";
import CreateTodoField from './create-todo-field/CreateTodoField'

// let data = [
//     {
//         _id:34234,
//         title: 'Finish the essay collaboration',
//         isCompleted: false
//     },
//     {
//         _id:3423433,
//         title: 'Read nest chapter og the book',
//         isCompleted: false
//     },
//     {
//         _id:342344434,
//         title: 'Send the finished assignment',
//         isCompleted: false
//     }
// ]
const pussy = [
    {
        _id:11111,
        title: 'Buy all in PussyCoin',
        isCompleted: false
    }]
const name = localStorage.getItem('TodoList')

    if (!name || name === '[]') {
        localStorage.setItem('TodoList', JSON.stringify(pussy))
    }

const Home = () => {
    const data = JSON.parse(localStorage.getItem("TodoList"));

    const [todos, setTodos] = useState(data)

    const changeTodo = (id)=>{
        const copy = [...todos]
        const current = copy.find(t=>t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
        localStorage.setItem('TodoList', JSON.stringify(todos));
    }

    const removeTodo = (id)=>{
        const copy = [...todos]
        setTodos(copy.filter(t=>t._id !==id))
        const copy2 = copy.filter(t=>t._id !==id)
        localStorage.setItem('TodoList', JSON.stringify(copy2));
    }

    // const removeTodo = (id)=>{
    //     setTodos([...todos].filter(t=>t._id !==id))
    // }

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold mb-10 text-center'>Todo for junior</h1>
            {todos.map(todo =>(
                <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo ={removeTodo}/>
            ))}
            <CreateTodoField todos={todos} setTodos={setTodos}/>
        </div>
    );
};

export default Home;