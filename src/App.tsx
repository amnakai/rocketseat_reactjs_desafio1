import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { ListaTarefas } from './components/ListaTarefas';
import { ChangeEvent, FormEvent, useState } from 'react';

export function App() {

  const [novaTarefaText, setNovaTarefaText] = useState('');

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <ListaTarefas />
      </div>
      
    </div>
  )
}
