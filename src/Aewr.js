import logo from './logo.svg';
import './Aewr.css';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
function Aewr() {

  const [test, setTest] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/takeUsers')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTest(data);
        console.log(data)
      })
  }, [])

  return (
    <div className="App">
      <header className="Aewr-header">
      {test ? test.map((item) => {
            return (
              <div>
            <p>{item.name}</p>
              </div>
            )
          }) : null}
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Перейти</Link>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Aewr;
