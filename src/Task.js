import logo from './logo.svg';
import './Task.css';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
function Task() {

  const [task, setTask] = useState([]);
  const [classes, setClasses] = useState([]);
  const [current, setCurrent] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/getClasses')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setClasses(data);
      console.log(data)
    })
  }, [])

  

  function submit () {
    let homework={
      teacherid: Number(localStorage.getItem('userid')),
      classid: Number(current),
      date: date,
      description: task
    }
    console.log(homework);
    fetch('http://localhost:3001/api/addTask',{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(homework),
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
    });
  }


  return (
    <div className="App">
      <header className="Task-header">
      </header>
      <select onChange={(e) => setCurrent(e.target.value)}>
          {classes ? classes.map((item) => {
            return (
              <option value={item.id}>
                {item.name}
              </option>
           )
          }) : null}
        </select>

        <input onChange={(e) => setTask(e.target.value)} value={task}></input>
        <input type="date" onChange={(e) => setDate(e.target.value)} value={date}></input>
        <div onClick={submit} >
          опубликовать
        </div>
    
  
    </div>
  );
}




export default Task;
