import './UserForm.css'
import {useState} from 'react';

const UserForm = () => {
  const [entereddName, setEnteredName] = useState('')
  const [entereddRollNo, setEnteredRollNo] = useState('')
  const [enteredCourse, setEnteredCourse] = useState('')

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    
  };

  const rollNoChangeHandler = (event) => {
    setEnteredRollNo(event.target.value)
  
  };
  const courseChangeHandler = (event) => {
    setEnteredCourse(event.target.value)
   
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log({
        "name": entereddName,
        "rollno": entereddRollNo,
        "course": enteredCourse
    })

  };

return (
    <div className='user-form'>
        <form onSubmit ={submitFormHandler} className="user-form__controls">
            <div className='user-form__control'>
                <label>Name</label>
                <input type="text" onChange={nameChangeHandler}></input>
            </div>
            <div className='user-form__control'>
                <label>Rollno</label>
                <input type="number" onChange={rollNoChangeHandler}></input>
            </div>
            <div className='user-form__control'>
                <label>Course</label>
                <input type="text" onChange={courseChangeHandler}></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
)
};

export default UserForm;