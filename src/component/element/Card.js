import styles from './Card.module.css'

function Card({id, name, title, desc, date, duration, handleRemove}){
    function mydate(date){
        let d=new Date(date);
        let dt=d.getDate();
        let mn=d.getMonth();
        mn++;
        let yy=d.getFullYear();
        return dt+"/"+mn+"/"+yy;
    }

    return (
        <div className={styles.task_card}>
            <h4>{title}</h4>
            <p><span>{desc}</span></p>
            <p><span>{mydate(date)}</span></p>
            <p><span>Duração: {duration}</span></p>
        </div>
    )
}

export default Card