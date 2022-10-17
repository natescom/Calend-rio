import {useHistory} from 'react-router-dom'
import Form from '../element/Form';

function NovaTask(){

    const history = useHistory();
    function createPost(task){
        fetch("http://localhost:5000/tasks",{
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(task)
        })
        .then( resp => resp.json())
        .then( resp => {
            console.log(resp)
            alert("Tarefa criada com sucesso")
        })
        .catch(erro => console.log(erro));
    }

    return (
        <div>
            <h1>Nova Tarefa</h1>
            <Form handleSubmit={createPost}/>

        </div>
    )
}

export default NovaTask;