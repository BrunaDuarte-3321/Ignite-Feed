import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from '../styles/Coment.module.css';
import { Avatar } from './Avatar';

interface CommentProsp{
  content: string;
  onDeletComment: (comment:string) => void;
}
export const Coment = ({ content, onDeletComment }: CommentProsp) => {

  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => {
    onDeletComment(content)
  }

  const handleLikeComment= () => {
    setLikeCount(likeCount + 1)
  }
  return (
    <div className={styles.coment}>
      <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/62619506?v=4' alt=""/>
      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruna Duarte</strong>
              <time title='29 de Junho de 2022' dateTime='2202-06-29 08:13:38'>Cerca  de uma 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p> {content} 👏👏</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
