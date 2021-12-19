import './App.css';
import { InputForm } from './components/InputForm';
import {Title} from "./components/Title";
import { ToDoList } from './components/ToDoList';
import {useState} from 'react';


function App() {

  const [taskList, settaskList] = useState([])

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} settaskList={settaskList} />
      <ToDoList taskList={taskList} settaskList={settaskList} />
    </div>
  );
}

export default App;
