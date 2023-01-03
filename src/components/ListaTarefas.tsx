import styles from './ListaTarefas.module.css';
import clipboard from '../assets/clipboard.png';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Tarefa } from './Tarefa';
import { Search } from './Search';

import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string,
  conteudo: string,
  isChecked: boolean
}

export function ListaTarefas() {
    
    const tarefas_inicial:Task[] = [];
    const [tarefas, setTarefas] = useState(tarefas_inicial) ;
    const [concluidas, setConcluidas] = useState('0');
    

    function criarNovaTarefa (novaTarefaText: string) {

      setTarefas([...tarefas, {
        id: uuidv4(),
        conteudo: novaTarefaText,
        isChecked: false
      }]);
      
    }


    function apagarTarefa (id: string) {
      setTarefas(
        tarefas.filter(tarefa => {return tarefa.id !== id})
      )


    }

    function updateStatus (id: string) {
      const tmp = tarefas.map(
        tarefa => {
          if (tarefa.id === id) {
            tarefa.isChecked = ! tarefa.isChecked
          }
          return tarefa;
        }
      )

      setTarefas(tmp);

    }

    function updateConcluidos () {
      const count = tarefas.filter(tarefa => tarefa.isChecked).length;

      if (count === 0) {
        setConcluidas('0');
      } else {
        setConcluidas(`${count} de ${tarefas.length}`);
      }
    }

    const countConcluidas = tarefas.filter(tarefa => tarefa.isChecked).length;

    return (
        <div className={styles.lista_tarefas_wrapper}>
            <Search 
              onCriateTarefa={criarNovaTarefa}
            />
            
            <header>
              <div >
                <span className={styles.tarefas_criadas}>Tarefas criadas</span>
                <span className={styles.contador}>{tarefas.length}</span>
              </div>
              <div >
                <span className={styles.tarefas_concluidas}>Concluídas</span>
                <span className={styles.contador}>{countConcluidas}{countConcluidas > 0 ? ` de ${tarefas.length}` : ""}</span>
              </div>
            </header>

            <div className={ `${styles.lista_vazia} ${tarefas.length > 0 ? styles.hidden : ""}`}>    
              <img src={clipboard}  />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

            <div className={ `${styles.lista_tarefas} ${tarefas.length == 0 ? styles.hidden : ""}`}>
              {tarefas.map(
                tarefa => {
                  return (
                    <Tarefa 
                      key={tarefa.id} 
                      id={tarefa.id} 
                      conteudo={tarefa.conteudo} 
                      isChecked={tarefa.isChecked}
                      onDeleteClick={apagarTarefa}
                      onStatusClick={updateStatus}
                    />
                  )
                }
              )}
            </div>

        </div>
    )
}
