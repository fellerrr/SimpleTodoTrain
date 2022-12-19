import React from 'react';
import {BsCheckLg} from 'react-icons/bs'

const Done = ({todo, changeTodos, isComplete}) => {
    return (
        <div className={`w-6 h-6 border-2 rounded-lg border-pink-400 flex items-center text-gray-900 
            ${isComplete ? 'bg-pink-400' : ''} justify-center`}
            onClick={()=>changeTodos(todo._id)}>
            {
                isComplete &&
                <BsCheckLg size={18}/>
            }
        </div>
    );
};

export default Done;