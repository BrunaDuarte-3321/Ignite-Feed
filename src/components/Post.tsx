import styles from '../styles/Post.module.css';
import { Avatar } from './Avatar';
import { Coment } from './Coment';

import {formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link';
  content: string
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export const Post = ({ author, publishedAt, content }: PostProps)=> {

  const [comments, setComments] = useState([
    'Post muito bacana, hein?',
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const newCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {

    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  const deletComment = (commentToDelet: string) => {

    const commentWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelet;
    })

    setComments(commentWithoutDeletedOne);
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Esté campo é obrigatório!')
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title='29 de Junho de 2022' dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{ item.content }</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href="#">{ item.content }</a></p>
          }
        })}

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          value={newCommentText}
          onChange={newCommentChange}
          placeholder='Deixe um comentário'
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.comentList}>
        {comments.map((coment) => {
          return (
            <Coment
              key={coment}
              content={coment}
              onDeletComment={deletComment}
            />
          )
        })}
      </div>
    </article>
)}
