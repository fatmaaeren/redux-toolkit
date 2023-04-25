import './App.css';
// import { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './todo/header';
import AddTodo from './todo/addTodo';
import TodoList from './todo/todoList';
import Modal from './todo/modal';

function App() {

  // const [language, setLanguage] = useState('tr');
  // const [dark, setDark] = useState(true);

  const { open: isModalOpen } = useSelector(state => state.modal)

  return (
    <main className='bg-slate-900 h-full flex flex-col justify-center items-center min-h-screen '>
      <Header />
      {
        isModalOpen && <Modal />
      }
      <AddTodo />
      <TodoList/>

    </main>
  ); 
}

export default App;

