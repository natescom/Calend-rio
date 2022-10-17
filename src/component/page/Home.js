import LinkButton from "../element/LinkButton";
import './Home.module.css'

function Home(){
    return (
        <div>
            <h1>Inicio</h1>
            <p>Organize suas atividades com o Calendário de Tarefas.<br></br>É rápido, fácil e intuitivo. <br></br>Experimente:</p><br></br>
            <LinkButton to="/newtask" text="Nova tarefa"></LinkButton>
             
        </div>
    )
}

export default Home;