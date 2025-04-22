import logo from './logo.svg';
import './Dnevnik.css';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Dnevnik() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const classId = {
        id: localStorage.getItem('classid')
    }
    Number(localStorage.getItem("classid"))
    fetch('http://localhost:3001/api/tablesheet', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(classId),
      })
      .then(response => {
        return response.json();
      })
      .then(result => {
      console.log (result)
      setData (result)

      });
  }, [])

  function Dnevnik() {

    const [text, setText] = useState([]);
    useEffect(() => {
      const classId = {
          id: localStorage.getItem('classid')
      }
      Number(localStorage.getItem("classid"))
      fetch('http://localhost:3001/api/getDnevnik', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(classId),
        })
        .then(response => {
          return response.json();
        })
        .then(result => {
        console.log (result)
        setData (result)
  
        });
    }, [])
  

  return (
    <div className="App">
      <header className="Dnevnik-header">
      {data? data.map((item) => {
            return (
              <div> 
            <span>{item.ln}</span>
            <span>{item.dn}</span>
            <span>{item.on}</span>
              </div> 
            )
          }) : null}
       
        <Link to="/">Перейти</Link>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
    </div>
  );
}
}

export default Dnevnik;
