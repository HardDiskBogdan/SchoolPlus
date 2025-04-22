import logo from './logo.svg';
import './User.css';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
function User() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/takeUsers')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data);
        console.log(data)
      })
  }, [])

  return (
    <div className="App">
      <header className="User-header">
        <table>
      {users ? users.map((item) => {
            return (
              <tr>
            <td>{item.username}</td>
            <td>{item.lastname}</td>
            <td>{item.login}</td>
            <td>{item.phonenumber}</td>
            <td>{item.telegram}</td>
            <td>{item.rolename}</td>
              </tr>
            )
          }) : null}
          </table>
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

export default User;
