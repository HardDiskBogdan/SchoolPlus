import logo from './logo.svg';
import './Student.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Teacher from './';

function Student() {
  const [data, setData] = useState([]);
  const [dnevnik, setDnevnik] = useState([]);
  const [tablesheet, setTablesheet] = useState([]);
  const [task, setTask] = useState([]);
  const [behaviour, setBehaviour] = useState([]);
  const [mark, setMark] = useState([]);
  const [commontasks, setCommontasks] = useState([]);
  const [currenttask, setCurrentTask] = useState('');
  const [date, setDate] = useState('');
  const [teacher, setTeacher] = useState('');
  const [current, setCurrent] = useState([]);
  const [currentCommonTasks, setCurrentCommonTasks] = useState('');
  const [deadline, setDeadline] = useState('');
  const [handup, setHandUp] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [chooseDate, setChooseDate] = useState(new Date());
  const [currentDescription, setCurrentDescription] = useState('');
  



  useEffect(() => {
    
    let todayDate = chooseDate.getFullYear() + '-' + (chooseDate.getMonth() + 1) + '-' + chooseDate.getDate();
   setCurrentDate(getFullDay (chooseDate)) 
    const userId = {
      id: localStorage.getItem('userid')
    };
    const user = {
      id: localStorage.getItem('userid'),
      day: todayDate 
    };
    const classid = {
      id: localStorage.getItem('classid'),
      day: chooseDate.getDay()
      //  new Date().getDay()
    }; 
    const classDate = {
      id: localStorage.getItem('classid'),
      day: todayDate 
    }
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

    fetch('http://localhost:3001/api/getAVGByUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setData(result);
      });

    fetch('http://localhost:3001/api/getTablesheetByClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(classid),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setTablesheet(result);
      });

    fetch('http://localhost:3001/api/getTaskByClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(classDate),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setTask(result);
      });

    fetch('http://localhost:3001/api/getBehaviourByClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setBehaviour(result);
      });

    fetch('http://localhost:3001/api/getMarkByClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setMark(result);
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
    fetch('http://localhost:3001/api/getDnevnik', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setDnevnik(result);
      });
  }, []);

  useEffect(() => {
    let todayDate = chooseDate.getFullYear() + '-' + (chooseDate.getMonth() + 1) + '-' + chooseDate.getDate();
    const user = {
      id: localStorage.getItem('userid'),
      day: todayDate
    };
    const classDate = {
      id: localStorage.getItem('classid'),
      day: todayDate 
    }
    console.log(user)
    fetch('http://localhost:3001/api/getTaskByClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(classDate),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setTask(result);
      });

    fetch('http://localhost:3001/api/getBehaviourByClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setBehaviour(result);
      });

    fetch('http://localhost:3001/api/getMarkByClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setMark(result);
      });
    const classid = {
      id: localStorage.getItem('classid'),
      day: chooseDate.getDay()
      //  new Date().getDay()
    };

    fetch('http://localhost:3001/api/getTablesheetByClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(classid),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setTablesheet(result);
      });
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




  function submitHandUp(lessonUserId) {
    let handupobj = {
      lessonuserid: lessonUserId,
      userid: Number(localStorage.getItem('userid')),
      handupdate:  chooseDate.getFullYear() + '-' + (chooseDate.getMonth() + 1) + '-' + chooseDate.getDate(),
    };
    console.log(handupobj);
    // if (new Date(handup) > today) {
      fetch('http://localhost:3001/api/Handup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(handupobj),
      });
    // } else {
    //   console.log('Неверная дата');
    // }
  }

  function submitTask(lu) {
    let homework = {
      teacherid: lu,
      classid: Number(localStorage.getItem('classid')),
      date: chooseDate.getFullYear() + '-' + (chooseDate.getMonth() + 1) + '-' + chooseDate.getDate(),
      description: currentDescription,
    };
    console.log(homework);
    setCurrentDescription ('')
    fetch('http://localhost:3001/api/addTask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(homework),
    });
  }

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
    let temp = start.getDate() + "-" + (start.getMonth() + 1) + "-" + start.getFullYear()
    console.log(temp)
    return temp
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
     weekDay: days[date.getDay()]
     
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

  return (
    <div className='studentContainer'>
        <div className='dataContainer'>
          <div className='dataBlock'>
            {data.length > 0 ? Number(data[0].avg).toFixed(1) : null}
          </div>
          <div className='dataBlock'>
            {data.length > 0 ? <div> {data[0].name} {data[0].lastname} </div> : null}
          </div>
          <div className='dataBlock'>
            {data.length > 0 ? <div> {data[0].classname} </div> : null}
          </div>
        </div>
<div className='datecontainer'>
  <div className='dateController' onClick={backdate}>Назад</div>
  <div className='dateContent'>{currentDate.date} {currentDate.weekDay}  </div>
  <div className='dateController' onClick={changedate}>Вперед</div>
</div>
      {/* {localStorage.getItem('roleid') == 3 ? (
        <>
          <div className='teacherContainer'>
            <input onChange={(e) => setCurrentTask(e.target.value)} value={currenttask} placeholder="Задание" />
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
            <select onChange={(e) => setCurrent(e.target.value)}>
              {teacher ? teacher.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} {item.lastname}
                </option>
              )) : null}
            </select>
            <div onClick={submitTask}>
              Опубликовать
            </div>
          </div>
          
        </>
      ) : null} */}

<form action='Tablesheet
' target='Tablesheet'>
<button>Изменение расписания</button>
</form>

      <table className='dnevnikTable'>
        {tablesheet.length > 0 ? tablesheet.map((item) => (
          <tr>
            <td className='GrayCell'>{item.name}</td>
            <td> 
              <textarea className='WhiteCellTextArea'  onChange={(e) => setCurrentDescription(e.target.value)}>
              {task.find(taskItem => taskItem.lessonuserid === item.lessonuserid)?.description || '' }
              </textarea>
            </td>
            <td className='WhiteCell'>
              {mark.find(markItem => markItem.lessonuserid === item.lessonuserid)?.mark || ''}
            </td>
            <td className='WhiteCell'>
              {behaviour.find(behaviourItem => behaviourItem.lessonuserid === item.lessonuserid)?.mark || ''}
            </td>
            <td className='buttonCell'>
              <div
                onClick={() => submitHandUp(item.lessonuserid)}
                className="testButton"
              >
                ✋
              </div>
            </td>
            <td>
              


              <div className='testButton' onClick={() =>submitTask(item.lessonuserid)}>Сохранить</div>
            </td>
          </tr>
        )) : null}
      </table>

<div className='commonTaskContainer'>
      {commontasks.length > 0 ? commontasks.map((item) => (
        // <div className=''>
          <textarea className='commonTask' onChange={(e) => setCurrentCommonTasks(e.target.value)}>
            {item.description}

          </textarea>
        // </div>
      )) : null}
      <div className='commonTaskControllers'>
      <div className='commonTaskButton' onClick={addNewCommonTask}>Добавить</div>
      <div  className='testButton' onClick={submitcommontasks}>
              Опубликовать
            </div>
      </div>
    </div>
    </div>
  );
}
export default Student;