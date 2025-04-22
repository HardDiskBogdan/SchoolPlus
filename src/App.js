import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const [test, setTest] = useState([]);
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [roleid, setRoleid] = useState();
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
    
  useEffect(() => {
    console.log(localStorage.getItem("roleid"))
    }, [submit])

function submit() {
  const user = {
    login: login, 
    pass: pass 


    
  }
console.log(user)
fetch('http://localhost:3001/api/checkuser',{
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
.then(response => {
  return response.json();
})
.then(data => {
console.log (data)
if (data.length == 1) {
  localStorage.setItem("classid", data[0].classid)
  localStorage.setItem("roleid", data[0].roleid)
  localStorage.setItem("userid", data[0].userid)
  // setRoleid (data[0].roleid)
  if (data[0].roleid == 1 ||  data[0].roleid == 3)  {
    navigate('/Student');
    }

    else if(data[0].roleid == 2) {
      navigate('/Teacher')
     }
  }
});
}

  return (
    <div className="App">
      <header className="App-header">
      {test ? test.map((item) => {
            return (
              <div>
            <p>{item.name}</p>
              </div>
            )
          }) : null}
       </header>
         {/* <Link to="/Aewr">Перейти</Link> */}
       <div className='entranceContainer'>
        <div className='formBlock'>
        {/* <form> */}
        <span className='formName'> Вход </span>
        <div className='inputBlock'>
        <div className='inputName'>Логин</div>
       <input className='entranceInput' placeholder='Введите ваш логин' onChange={(e) => setLogin(e.target.value)} value={login}></input>
       <div className='inputName'>Пароль</div>
        <input className='entranceInput' placeholder='Введите пароль' onChange={(e) => setPass(e.target.value)} value={pass}></input>
        <div className='linkButton'> <Link className='linkText' to="/Registration">Регистрация</Link> </div>
        </div>
        
       <div className='entranceButton' onClick={submit}>
        Войти 
       </div>
      {/* </form> */}
      </div>
      </div>
      
    </div>
  );
}

export default App;
