import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'

function NavBar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <h1 className={styles.title}>Calendário de Tarefas</h1>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Inicio</Link></li>
                    <li className={styles.item}><Link to='/newtask'>Criar Tarefa</Link></li>
                    <li className={styles.item}><Link to='/tasks'>Minhas Tarefas</Link></li>
                </ul>
            </Container>
       </nav>
    )
}

export default NavBar