import React from 'react';
import {BsTrash} from 'react-icons/bs'
const Trash = ({todo, removeTodo}) => {
    return (
        <div className='ml-auto text-gray-600 hover:text-red-900'
             onClick={()=>removeTodo(todo._id)}>
            <BsTrash/>
        </div>
    );
};

export default Trash;