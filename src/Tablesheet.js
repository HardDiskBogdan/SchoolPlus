import logo from './logo.svg';
import './Tablesheet.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Tablesheet() {
  const [data, setData] = useState([]);
  const [commontasks, setCommontasks] = useState([]);
  const [currenttask, setCurrentTask] = useState('');
  const [date, setDate] = useState('');
  const [teacher, setTeacher] = useState('');
  const [current, setCurrent] = useState([]);
  const [currentCommonTasks, setCurrentCommonTasks] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [chooseDate, setChooseDate] = useState(new Date());
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [newPosition, setNewPosition] = useState('');



  useEffect(() => {
    

    let todayDate = chooseDate.getFullYear() + '-' + (chooseDate.getMonth() + 1) + '-' + chooseDate.getDate();
   setCurrentDate(getFullDay (chooseDate)) 
    const userId = {
      id: localStorage.getItem('userid')
    };
    const classid = {
      id: localStorage.getItem('classid'),
      day: chooseDate.getDay()
      //  new Date().getDay()
    };
    const taskobj = {
      id: localStorage.getItem('classid'),
      date: todayDate
    };
    fetch('http://localhost:3001/api/getcommontasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskobj),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setCommontasks(result);
      });

    // fetch('http://localhost:3001/api/getTablesheetByClass', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(classid),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result);
    //     setTablesheet(result);
    //   });


    fetch('http://localhost:3001/api/LessonList')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      });


    fetch('http://localhost:3001/api/getTeacher')
      .then(response => response.json())
      .then(data => {
        setTeacher(data);
        console.log(data);
      });

    let obj = {
      userid: Number(localStorage.getItem('userid')),
      classid: Number(localStorage.getItem('classid')),
      date: todayDate,
    };
    console.log(obj);
  }, []);

  useEffect(() => {
    const classid = {
      id: localStorage.getItem('classid'),
      day: chooseDate.getDay()
      //  new Date().getDay()
    };

    // fetch('http://localhost:3001/api/getTablesheetByClass', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(classid),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result);
    //     setTablesheet(result);
    //   });
      const taskobj = {
        id: localStorage.getItem('classid'),
        date:  chooseDate.getFullYear() + '-' + (chooseDate.getMonth() + 1) + '-' + chooseDate.getDate(),
      };
      fetch('http://localhost:3001/api/getcommontasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskobj),
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setCommontasks(result);
        });
  }, [chooseDate])

 
  function submitcommontasks() {
    let commontasksobj = {
      lessonuserid: 1,
      classid: Number(localStorage.getItem('classid')),
      deadline: chooseDate.getFullYear() + '-' + (chooseDate.getMonth() + 1) + '-' + chooseDate.getDate(),
      description: currentCommonTasks,
    };
    console.log(commontasksobj);
    fetch('http://localhost:3001/api/addCommonTasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commontasksobj),
    });
  }

  const [test, setTest] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/takeUsers')
      .then(response => response.json())
      .then(data => {
        setTest(data);
        console.log(data);
      });
  }, []);

  const dateToString = (date) => {
    let start = new Date(date);
    return start.getDate() + "-" + (start.getMonth() + 1) + "-" + start.getFullYear();
  };

  function changedate() { 

    let nextDay = new Date(chooseDate.setDate(chooseDate.getDate() + 1))
    setChooseDate (nextDay)
    setCurrentDate(getFullDay (nextDay)) 
  }
   function getFullDay (date) {
    let days = ['Воскресенье', 'Понедельник' , 'Вторник' , 'Среда' , 'Четверг' , 'Пятница' , 'Суббота']
    let month = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    let curr = {
     date: date.getDate() + ' ' + month[date.getMonth()],
     weekDay: days[date.getDay()],
     dayNum:date.getDay()
     }
     return curr
   }

   function backdate() { 

    let nextDay = new Date(chooseDate.setDate(chooseDate.getDate() - 1))
    setChooseDate (nextDay)
    setCurrentDate(getFullDay (nextDay)) 
  }

function addNewCommonTask () {
  setCommontasks([...commontasks, {lessonuserid:current, classid:Number(localStorage.getItem('classid')), deadline: chooseDate, description: currentCommonTasks
   }]);
   console.log (commontasks)
}

function addNewLesson () {
    setLessons([...lessons, {lessonuserid:currentLesson, classid:Number(localStorage.getItem('classid')), dayid: currentDate.dayNum
     }]);
     console.log (lessons)
  }

const addSubject = () => {
  if (!newSubject) return;
  const updatedSchedule = [...schedule]
  const position = newPosition ? parseInt(newPosition) -1:schedule.length 
  updatedSchedule.splice(position,0,{id:Date.now(), subject:newSubject,position:position +1})
  const finalSchedule = updatedSchedule.map ((item,index) => ({...item,position:index+1}))
  setSchedule (finalSchedule); 
  setNewSubject('')
  setNewPosition('')
}  

const removeSubject = (id) => {
 const updatedSchedule = schedule.filter (item => item.id != id).map((item,index) => ({...item,position:index+1}))
 setSchedule (updatedSchedule)
}
const submitSchedule = () => {
    const delobj = {dayid:chooseDate.getDay(), classid: Number(localStorage.getItem('classid'))}
    console.log (delobj)
      fetch('http://localhost:3001/api/DeleteSchedule',{
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(delobj),
      })
      .then(response => {
        return response.text();
      })
      .then(data => {
      });
    schedule.map(item => {
    item.dayid = chooseDate.getDay();
    item.classid = Number(localStorage.getItem('classid'))
    fetch('http://localhost:3001/api/AddSchedule',{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(item),
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
    });
  }) 
  console.log(schedule)}
 

  return (
    <div className='studentContainer'>
<div className='dateContainer'>
  <div className='dateController' onClick={backdate}>Назад</div>
  <div className='dateContent'> {currentDate.weekDay}  </div>
  <div className='dateController' onClick={changedate}>Вперед</div>
</div>
   <div> 
<div>
  <div>
  <label htmlFor='subject'>Предмет</label>
 <select id='subject' value={newSubject}  onChange={(e) => setNewSubject(e.target.value)}>
  <option value=''>Выберите Предмет</option>
  {data.length > 0 ? data.map((subject,index) => (
                <option key={index} value={subject.id}>
                    {subject.name}-{subject.username}
                </option>
            )): null} 
  </select>
  </div>
  <div> 
    <label htmlFor='position'>Порядок</label>
    <input id='position' type='number' min='1' max={schedule.length+1} value={newPosition} onChange={(e) => setNewPosition(e.target.value)}></input>
  </div>
  <button onClick={addSubject}>Добавить</button>
</div>
   </div>
   <div>
    {schedule.length == 0 ? (<p>Нет предметов</p>):(
      <ul>
        {schedule.map((item,index) => (
          <li key={item.id}>
            <spam>{item.position}</spam>
            {/* <spam>{data.find(item2 => item2.id == item.id).name}</spam>  */}
            <spam><button onClick={() => removeSubject(item.id)}>удалить</button></spam>
          </li>))}
      </ul>
    )}
    </div>
    <div  className='testButton' onClick={submitSchedule}>
              Опубликовать
            </div>

{/* <div className='commonTaskContainer'>
      {lessons.length > 0 ? lessons.map((item, index) => (
        <select key={index} onChange={(e) => setCurrentLesson(e.target.value)} >
            <option>

            </option>
            {data.length > 0 ? data.map(item2 => (
                <option value={item2.id}>
                    {item2.name}
                </option>
            )): null} 
        </select>        
          <textarea className='commonTask' onChange={(e) => setCurrentLesson(e.target.value)}>
            {item.description}

          </textarea>
      )) : null}
      <div className='commonTaskControllers'>
      <div className='commonTaskButton' onClick={addNewLesson}>Добавить</div>
      <div  className='testButton' onClick={submitcommontasks}>
              Опубликовать
            </div>
      </div>
    </div> */}
    </div>
  );
}
export default Tablesheet;
