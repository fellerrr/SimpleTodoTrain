import React from 'react';
import Check from "./Check";
import Trashed from "./Trashed";

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className='flex justify-between items-center mb-4 rounded-2xl bg-zinc-800
         w-full'>
            <button className='flex w-11/12 p-3 items-center' onClick={()=>changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted}/>
                <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
            </button>
            <button className='mr-4' onClick={()=>removeTodo(todo._id)}>
                <Trashed />
            </button>

        </div>
    );
};

export default TodoItem;