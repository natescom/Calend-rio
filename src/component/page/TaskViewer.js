import Card from "../element/Card";
import {useState, useEffect} from 'react'
import Container from '../layout/Container'

function TaskViewer(){
    const [tasks, setTask] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/tasks",{
            method: 'GET',
            headers: {
                'Content-type':'application/json'
            }
        })
        .then( resp => resp.json())
        .then( data => {
            setTask(data)
            console.log(data)
        })
        .catch(erro => console.log(erro));

    },[])

    
    return (
        <div>
            <h1>Tarefas</h1>
            <Container customClass="containerCard">
                {tasks.length>0 && tasks.map((task) =>{
                    return <Card name={task.name} 
                            desc={task.desc} 
                            title={task.title} 
                            date={task.date} 
                            duration={task.duration}/>
                })}
            </Container>
        </div>
    )
}

export default TaskViewer;