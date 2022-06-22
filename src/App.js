import { useState, useEffect } from 'react';
import './App.css';
import {TaskCreator} from './components/TaskCreator';
import {TaskTable} from './components/TaskTable';
import {VisibilityControl} from './components/VisibilityControl';

/*   const [taskItems, setTaskItems] = useState([ // se eliminan los datos internos para que los actualice con los datos que se van a ingresar y no unos por defecto.
    {name: 'my first task', done: false},
    {name: 'my second task', done: false},
    {name: 'my third task', done: false},
  ]); */


function App() {

  const [tasksItems, setTasksItems] = useState([]);
  const [showComplete, setShowComplete] = useState(false);

  function createNewTask(taskName) {
    if(!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, {name: taskName, done: false}]);
    }
  }

  const  toggleTask = task=> {
    setTasksItems(
      tasksItems.map((t) => (t.name === task.name ? {...t, done: !t.done} : t)));
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if(data !== null) { //& si no se pone != a null genera error.
      setTasksItems(JSON.parse(data))
    }
  }, [ ])

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowComplete(false)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  },[tasksItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

      <VisibilityControl
      isChecked={showComplete}
      setShowComplete={(checked)=>setShowComplete(checked)} cleanTasks={cleanTasks}/>

      {
        showComplete === true && (<TaskTable tasks={tasksItems} toggleTask={toggleTask} showComplete={showComplete} />)
      }

    </div>
  );
};

export default App;
