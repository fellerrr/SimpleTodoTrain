import React from 'react';
import {BsTrash} from 'react-icons/bs'
const Trash = () => {
    return (
        <div className='text-gray-600 hover:text-red-900 transition-colors ease-in-out duration-700'>
            <BsTrash size={22}/>
        </div>
    );
};

export default Trash;