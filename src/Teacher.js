import logo from './logo.svg';
import './Teacher.css';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Teacher() {

  const [classes, setClasses] = useState([]);
  const [chat_id, setChat_id] = useState([]);
  const [current, setCurrent] = useState();
  const [data, setData] = useState([]);
  const [task, setTask] = useState([]);
  const [date, setDate] = useState([]);
  const [studentId, setStudentId] = useState([]);
  const [mark, setMark] = useState([]);
  const [bmark, setBmark] = useState([]);
  const [id, setId] = useState([]);
  const [handups, setHandups] = useState([]);
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState(null)
  const [image, setImage] = useState({
    preview: '',
    raw: '',
  });

  const BOT_TOKEN = '7912841758:AAEOl7Chd7MeMOovHvny3Acm4UgOpr5zO_o'
  
  useEffect(() => {
    fetch('http://localhost:3001/api/GetCurrentLesson')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setCurrent(data[0].classid);
          setId (data[0].lessonuserid);
          console.log(data[0].lessonuserid);
        }
        else  {
          setMessage('на данный момент у вас нет урока')
        }
      });

      fetch('http://localhost:3001/api/GetHandsUpByDate')
      .then(response => response.json())
      .then(data => {
        setHandups(data);
        console.log(data);
    
      });
  }, []);
   
  useEffect(() => {
    if (!current) return;

    const classId = { id: Number(current) };
    fetch('http://localhost:3001/api/getUsersByclass', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(classId),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);

        
        setData(result);
      });
  }, [current]);

  
 
  // // fetch('http://localhost:3001/api/getUsersByclass', {
  //   fetch('http://localhost:3001/api/getUsersByclass', {
  //     method: 'POST',
  //     headers: { 
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(classId),
  //   })
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(result => {
  //   console.log (result)
  //   setData (result)

  //   });
    

    // } [current]

    function submitTask () {
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
    
    function submit (student, chatid) {
      console.log (student, chatid)
      let now = new Date();

let markObj = {
  userid: student,
  mark: Number(mark),
  date: now,
  teacherid: Number(localStorage.getItem('userid'))
}
console.log (markObj)
let bmarkObj = {
  userid: student,
  bmark: Number(bmark),
  date: now,
  teacherid: Number(localStorage.getItem('userid'))
}
console.log(bmarkObj)
      fetch('http://localhost:3001/api/addMark',{
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(markObj),
      })
      .then(response => {
        return response.text();
      })
      .then(data => {
      });

      fetch('http://localhost:3001/api/addBmark',{
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bmarkObj),
      })
      .then(response => {
        return response.text();
      })
      .then(data => {
      });
      let message = 'ваше чадо умнее камня';
if (Number(bmark) > 2) {
    message=
    'ваше чадо ужасно'
  }
  if (mark < 6 ) {
    message=
      'у вашего чада плохие оценки сдайте его в дет дом ' + mark
    }
  
  if (mark < 6 && Number(bmark) > 2) {
    message=
      'ваше чадо ужасно ' + mark
 
  }
  let obj = {
    text:message,
    chatid: chatid
    
  } 
  console.log (obj)
  fetch('http://localhost:3001/api/sendTelegramMessage',{
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
  .then(response => {
    return response.text();
  })
  .then(data => {
  }); 
  
    }

    function getStudent (student, chatid) {
      setChat_id(chatid) 
      setStudentId (student)
      setBmark() 
      setMark()
    }

function markList () {
  let marks=[1,2,3,4,5,6,7,8,9,10]
  return (
    <select className='selectmark' onChange={(e) => setMark(e.target.value)}>
      {marks.map(item=>(
        <option>{item}</option>
      ))}
    </select>
  )
}

function bMarkList () {
  let bmarks=[{bmark:1, img: '😂'}, {bmark:2, img: '😄'}, {bmark:3, img: '😒'}, {bmark:4, img: '🤢'}, {bmark:5, img: '🎥'}]
  return (
    <select className='selectmark' onChange={(e) => setBmark(e.target.value)}>
      {bmarks.map(item=>(
        <option value={item.bmark}>{item.img}</option>
      ))}
    </select>
  )
}

const handlePhotoChange = (e: any) => {
  if (e.target.files.length) {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  }
};

const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(chat_id)
  const formData = new FormData();
        formData.append('chat_id', chat_id);
        formData.append('photo', file);
  
        const response = await axios.post(`
          https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
}
  return (
    <div className="App">
      <header className="teacher-header">
      {/* {test ? test.map((item) => {
            return (
              <div>
            <p>{item.name}</p>
              </div>
            )
          }) : null}
        <img src={logo} className="App-logo" alt="logo" /> */}





        {/* <Link to="/Marks">Поставить оценку</Link>
        <Link to="/Behaviour">Указать поведение</Link>
        <Link to="/Task">Задать домашнее задание</Link> */}
<div>
{data.length < 1 && message?<div>{message}</div>: null}

  {/* <div className='teacherContainer'>
  <input onChange={(e) => setTask(e.target.value)} value={task}></input>
        <input type="date" onChange={(e) => setDate(e.target.value)}
         value={date}></input>
        <div onClick={submitTask}>
          опубликовать
        </div>
  </div> */}
<table>
      {data.length > 0 ? data.map((item) => {
            return (
              <tr>
            <td><div className='spisok' onClick={() => getStudent(item.id, item.telegram)} >{item.name} {item.lastname}</div></td>
            <td><div className='mark'>{Number(item.avg).toFixed(1)}</div></td>

            {handups.length > 0 ? handups.map(item2 => {
            
if (item2.lessonuserid == id && item2.userid == item.id) {

console.log(item2)
console.log(item2.userid)
console.log(item.id)
return( 
<td>
<div>
рука
</div>
</td>
)}}) : null }

            {studentId == item.id ? <> <td>
             
            {markList()}
            </td> 
            <td> 
                {bMarkList()}
                
            </td>
            <td>
            <div className='testButton' onClick={() => submit(item.id, item.telegram)}>
          Сохранить
        </div> 
            </td> 
            <td><div>
              рука
              </div></td><td>
              <div>
<h2>Отправить файл в телеграмм</h2>
<form onSubmit={handleSubmit}>
  <input type='file' onChange={handleFileChange} accept='image/*'>
</input>
<button type='submit'> Отправить</button>
</form>
</div>
              </td>
             </> : null}
              </tr>
            )
          }) : null}
          </table>
</div>
        {/* {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React }
        </a> */}
      </header>

{/* <div>
<h2>Отправить файл в телеграмм</h2>
<form onSubmit={handleSubmit}>
  <input type='file' onChange={handleFileChange} accept='image/*'>
</input>
<button type='submit'></button>
</form>
</div> */}

      {/* <label htmlFor="upload-button">
          {image.preview ? (
            <img
              src={image.preview}
              alt="dummy"
              width="300"
              height="300"
            />
          ) : (
            <>
              <p>
                Upload Image
              </p>
              
              <div />
            </>
          )}
        </label>

        <input id="upload-button" name="image" type='file' 
                onChange={handlePhotoChange}
   ></input> */}

    </div>
  );
}



export default Teacher;