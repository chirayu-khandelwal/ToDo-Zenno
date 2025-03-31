import { useEffect, useState } from 'react';
import ToDo from "./components/ToDo";
import { getAllToDO } from './utils/HandleApi';

function App() {

  const [ToDo, setToDo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllToDO(setToDo);
  }, []);

  return (
    <div className='App'>

      <div className="container">

        <h1>ToDO App - Zenno</h1>

        <div className="top">
          <input 
          type="text" 
          placeholder="Enter a task" 
          value={text} 
          onChange={(e) => setText(e.target.value)} />
          <div className="add" onClick={addToDo}>Add Task</div>
        </div>

        <div className="tasks">
          {ToDo.map((todo, index) => (
            <ToDo
              key={index}
              text={todo.text}
              updateMode={() => {}}
              deleteToDo={() => {}}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
export default App;
