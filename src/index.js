import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Aewr from './Aewr';
import App from './App';
import Registration from './Registration';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dnevnik from './Dnevnik';
import User from './User';
import Marks from './Marks';
import Behaviour from './Behaviour';
import Teacher from './Teacher';
import Student from './Student';
import Task from './Task';
import Telegram from './Telegram';
import Tablesheet from './Tablesheet';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Aewr" element={<Aewr />} />
    <Route path="/Registration" element={<Registration />} />
    <Route path="/Dnevnik" element={<Dnevnik />} />
    <Route path="/User" element={<User />} />
    <Route path="/Marks" element={<Marks />} />
    <Route path="/Behaviour" element={<Behaviour />} />
    <Route path="/Teacher" element={<Teacher />} />
    <Route path="/Student" element={<Student />} />
    <Route path="/Task" element={<Task />} />
    <Route path="/Telegram" element={<Telegram />} />
    <Route path="/Tablesheet" element={<Tablesheet />} />


    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
