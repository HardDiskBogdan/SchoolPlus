import logo from './logo.svg';
import './Telegram.css';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
function Telegram() {

  const [text, setText] = useState();
//   useEffect(() => {
//     fetch('http://localhost:3001/api/takeUsers')
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         setTest(data);
//         console.log(data)
//       })
//   }, [])

  function submit () {
    let message={
      text: text,
    }
    console.log(text);
    fetch('http://localhost:3001/api/sendTelegramMessage',{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
    });
  }



  return (
    <div className="telegramContainer">
      <header className="Telegram-header">
      
      </header>
      <div className='telegramForm'>
      <input onChange={(e) => setText(e.target.value)} value={text}></input>
      <div className='submitButton' onClick={submit}>
          отправить
        </div>

      </div>
    </div>
  );
}

export default Telegram;
