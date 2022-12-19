import React, {useState} from 'react';

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')
    const addTodo = title => {
        setTodos(prev =>[
            {
                _id: new Date(),
                title,
                isCompleted: false,
            },
            ...prev,
        ])
        setTitle('')
    }



    return (
        <div className='flex justify-between items-center mb-4 rounded-2xl bg-zinc-900 border
        border-gray-600 w-full px-5 py-2 mt-20'>
            <input
                type='text'
                maxLength="60"
                placeholder='Add a task'
                onChange={e => setTitle(e.target.value)}
                value = {title}
                onKeyPress={e=>e.key === 'Enter' && addTodo(title)}
                className='bg-transparent w-full border-none outline-none'
            />
        </div>
    );
};

export default CreateTodoField;