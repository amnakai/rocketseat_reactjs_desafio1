import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState, FormEvent } from 'react';
import styles from './Search.module.css';

interface SearchProps {
   onCriateTarefa: (tarefa: string) => void;
}

export function Search({onCriateTarefa}:SearchProps) {

   const [novaTarefaText, setNovaTarefaText] = useState('');

   function handleNovaTarefaTextChange(event: ChangeEvent<HTMLInputElement>) {
  
      setNovaTarefaText(event.target.value);
   }

   function handleCriarNovaTarefa(event: FormEvent) {
      event.preventDefault();

      onCriateTarefa(novaTarefaText);

      setNovaTarefaText('');
   }

   return (       
        <form onSubmit={handleCriarNovaTarefa} className={styles.searchForm}>
           <input 
               type="text" 
               onChange={handleNovaTarefaTextChange}
               placeholder="Adicione uma nova tarefa"
               value={novaTarefaText}   
            />
           <button type='submit' disabled={novaTarefaText.length === 0}>
              <strong>Criar</strong>
              <PlusCircle size={18} />
           </button>
        </form>
   )
}


