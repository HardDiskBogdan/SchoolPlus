import logo from './logo.svg';
import './Marks.css';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
function Marks() {

  const [student, setStudent] = useState([]);
  const [mark, setMark] = useState([]);
  const [date, setDate] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    fetch('http://localhost:3001/api/getStudent')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setStudent(data);
        console.log(data)
      })
  }, [])


  
  function submit () {
    let user={
      userid: Number(currentUser),
      mark: Number(mark),
      date: date,
      teacherid: Number(localStorage.getItem('userid'))
    }
    console.log(user);
    fetch('http://localhost:3001/api/addMark',{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
    });
  }

  return (
    <div className="Appp">
         <Link to="/Teacher">Назад</Link>
      <form className='inputContainer'>
        {/* <input onChange={(e) => setName(e.target.value)} value={name}></input>
        <input onChange={(e) => setLastname(e.target.value)} value={lastname}></input>
        <input onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <input onChange={(e) => setPass(e.target.value)} value={pass}></input>
        <input onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber}></input>
        <input onChange={(e) => setTelegram(e.target.value)} value={telegram}></input> */}
        <select onChange={(e) => setCurrentUser(e.target.value)}>
          {student ? student.map((item) => {
            return (
              <option value={item.id}>
                {item.username} {item.lastname}
              </option>
           )
          }) : null}
        </select>

        <input onChange={(e) => setMark(e.target.value)} value={mark}></input>
        <input type="date" onChange={(e) => setDate(e.target.value)} value={date}></input>

        <div onClick={submit}>
          Поставить оценку
        </div>
      </form>
    </div>
  

 );
}



export default Marks;
