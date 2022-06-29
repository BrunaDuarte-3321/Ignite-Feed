import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/62619506?v=4',
      name: 'Bruna Duarte',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
    ],
    publishedAt: new Date('2022-06-25 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/62619506?v=4',
      name: 'Vanessa Miranda',
      role: 'Web Developer 3'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto ' },
    ],
    publishedAt: new Date('2022-06-28 20:00:00')
  }
]

export const  App = () =>  {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map((post) => {
            return (
              <>
                <Post
                  key={post.id}
                  img={post.author.avatarUrl}
                  name={post.author.name}
                  role={post.author.role}
                  publishedAt={post.publishedAt}
                  content={post.content}
                />
              </>
            )
          })}
        </main>
      </div>

    </>
  )
}
