import styles from '../styles/Post.module.css';
import { Avatar } from './Avatar';
import { Coment } from './Coment';
export const Post = ( ) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src='https://avatars.githubusercontent.com/u/62619506?v=4'/>
          <div className={styles.authorInfo}>
            <strong>Bruna Duarte</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='29 de Junho de 2022' dateTime='2202-06-29 08:13:38'>Publicado há uma 1h</time>
      </header>
      <div className={styles.content}>
        <p>
          Fala galeraa 👋
        </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

         </p>
        <p>
           <a href="#">jane.design/doctorcare</a>
          <a href="#">#novoprojeto </a>{' '}
          <a href="#">#nlw</a>{'  '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.comentList}>
        <Coment/>
        <Coment/>
        <Coment/>
      </div>
    </article>
)}
