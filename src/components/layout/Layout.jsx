import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='py-5 bg-gray-900 h-screen bg-zinc-900'>
            {children}
        </div>
    );
};

export default Layout;