import logo from './logo.svg';
import './Registration.css';
import { useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [telegram, setTelegram] = useState('');
    const [roleid, setRoleid] = useState('');

    const [roles, setRoles] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3001/api/takeRoles')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setRoles(data);
            console.log(data)
        })
    }, [])

    function submit() {
        let user = {
            name: name,
            lastname: lastname,
            email: email,
            pass: pass,
            phonenumber: phonenumber,
            telegram: telegram,
            roleid: roleid
        }
        
        console.log(user);
        fetch('http://localhost:3001/api/adduser', {
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
            
           
        })
        .catch(error => {
            console.error('Error:', error);
        });
        navigate('/');
    }

    return (
        <div className="Appp">
            <div className='entranceContainer'>
                <div className='formBlock'>
                    <span className='formNameo'> Регистрация </span>
                    <div className='inputBlock'>
                        <div className='inputName'> Имя </div>
                        <input className='entranceInput' placeholder='Введите ваше имя' onChange={(e) => setName(e.target.value)} value={name}></input>
                        <div className='inputName'> Фамилия </div>
                        <input className='entranceInput' placeholder='Введите вашу фамилию' onChange={(e) => setLastname(e.target.value)} value={lastname}></input>
                        <div className='inputName'> Логин </div>
                        <input className='entranceInput' placeholder='Введите email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                        <div className='inputName'> Пароль </div>
                        <input className='entranceInput' placeholder='Введите пароль' onChange={(e) => setPass(e.target.value)} value={pass}></input>
                        <div className='inputName'> Тел.Номер </div>
                        <input className='entranceInput' placeholder='Введите ваш номер' onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber}></input>
                        <div className='inputName'> Телеграмм </div>
                        <input className='entranceInput' placeholder='Введите ваш телеграмм' onChange={(e) => setTelegram(e.target.value)} value={telegram}></input>
                        <div className='inputName'> Роль </div>
                        <select className='roleSelect' onChange={(e) => setRoleid(e.target.value)}>
                            {roles ? roles.map((item) => {
                                return (
                                    <option value={item.id}>
                                        {item.name}
                                    </option>
                                )
                            }) : null}
                        </select>
                    </div>
                    <div className='entranceButton' onClick={submit}>
                        Регистрация
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;