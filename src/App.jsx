import { Post } from "./Post"
import styles from './App.module.css';
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

export const  App = () =>  {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author='Criado por Bruna Duarte' data='28/06/2022' />
          <Post author='Criado por Ana Duarte' data='02/07/2022' />
        </main>
      </div>

    </>
  )
}
