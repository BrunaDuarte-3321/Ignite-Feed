import { ThumbsUp, Trash } from 'phosphor-react';
import styles from '../styles/Coment.module.css';
export const Coment = () => {
  return (
    <div className={styles.coment}>
      <img src="https://avatars.githubusercontent.com/u/62619506?v=4" alt="" />

      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruna Duarte</strong>
              <time title='29 de Junho de 2022' dateTime='2202-06-29 08:13:38'>Cerca  de uma 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
           <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
