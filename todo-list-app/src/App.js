import React, { useState } from 'react';
import './App.css';
//Importing components
import Form from './components/form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
        <header>
          <h1>Owais' TO-DO list</h1>
        </header>
        <Form />
        <ToDoList />
    </div>
  );
}

export default App;
