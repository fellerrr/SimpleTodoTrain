import React from 'react';
import Layout from "./components/layout/Layout";
import TodoList from "./components/screens/TodoList/TodoList";
import Home from "./components/screens/Home/Home";

const App = () => {
    return (
        <Layout>
            <TodoList/>
            <Home/>
        </Layout>
    );
};

export default App;