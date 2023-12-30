import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [task, setTask] = useState("");
    const [taskList, setList] = useState([]);

    const createTask = () => {
        const updateList = [...taskList, task];
        setList([...taskList, task]);
        setTask("");
        SaveData(updateList);

        const source = document.getElementById("add-value");
        source.value = "";
    };

    const SaveData = (taskData) => {
        localStorage.setItem("data", JSON.stringify(taskData));
    }

    const LoadData = () => {
        const data = localStorage.getItem("data");
        if (data){
            setList(JSON.parse(data));
        }
    }

    useEffect(() => {
        LoadData();
    }, []);

    return (
        <div className='App-wrapper'>
            <center>
                <h1 style={{color: "white"}}>React - ToDo app</h1>
            </center>
            <br></br>
            <div className='wrapper-add'>
                <center id='center-add'>
                    <br></br>
                    <input
                     type='text'
                     placeholder='Write your task'
                     onChange={(e) => {setTask(e.target.value)}}
                     id='add-value'
                    >   
                    </input>
                    <button
                     id='add-button'
                     onClick={() => {createTask();}}
                    >Add</button>
                </center>
            </div>
            <br></br>
            <div className='wrapper-content'>
            {taskList.map((taskElement, index) => {
                return (
                    <div className='elements' key={index}>{taskElement}</div>
                )
            })
            }
            </div>
        </div>
    )
}

export default App;