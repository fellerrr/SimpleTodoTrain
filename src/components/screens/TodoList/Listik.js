import React from 'react';
import Done from "./Done";
import Trash from "./Trash";

const Listik = ({todo, changeTodos, isComplete, removeTodo}) => {
    return (
        <div className='flex w-4/5 bg-gray-800 rounded-md p-2 mb-4 mx-auto
                        items-center gap-3 hover:bg-gray-700'>
            <Done todo={todo} changeTodos={changeTodos} isComplete={isComplete}/>
            {todo.title}
            <Trash todo={todo} removeTodo={removeTodo}/>
        </div>
    );
};

export default Listik;