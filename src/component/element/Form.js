import styles from './Form.module.css'
import Input from './Input'
import { useState } from 'react'

function Form({handleSubmit, taksData}){
    const[task, setTask] = useState(taksData || {})

    const submit = e => {
        e.preventDefault();
        handleSubmit(task);

    }

    function handleChange(e) {
        setTask({...task, [e.target.name]:e.target.value});
    }

    return (
    <form onSubmit={submit} className={styles.form}>
        <Input type="text" 
            text="Título" 
            name="title"
            placeholder="Digite um título"
            handleOnChange={handleChange} ></Input>
        <Input type="text" 
            text="Descrição" 
            name="desc"
            placeholder="Descreva sua tarefa" 
            handleOnChange={handleChange}>
            </Input>
        <Input type="datetime-local" 
            text="Data" 
            name="date"
            handleOnChange={handleChange}>
            </Input>
        <Input type="time" 
            text="Duração" 
            name="duration" 
            handleOnChange={handleChange}></Input>
        <input className={styles.formSubmit} type="submit" value="Criar"/>
    </form>
    )

}

export default Form