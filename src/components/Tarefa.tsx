import { Circle, Trash, CheckCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tarefa.module.css';


export function Tarefa(props: any) {

    const [id, setId] = useState(props.id)
    const [conteudo, setConteudo] = useState(props.conteudo)
    const [status, setStatus] = useState(props.isChecked)


    function handleStatusClick() {
        setStatus(!status);
        props.onStatusClick(id);
    }

    function handleDeleteClick() {
        props.onDeleteClick(id);
    }

    return (
        <div className={styles.tarefa}>
            <div onClick={handleStatusClick}>
                <Circle className={`${styles.unchecked} ${status ? styles.hidden : ""}`} size={24} />
                <CheckCircle className={`${styles.checked} ${!status ? styles.hidden : ""}`} size={24} />
            </div>
            <p className={`${styles.content} ${status ? styles.content_done : ""}`}>{conteudo}</p>
            <Trash onClick={handleDeleteClick} className={styles.delete} size={24} />
        </div>

    );


}