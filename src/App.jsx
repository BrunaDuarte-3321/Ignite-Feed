import { Post } from "./Post"
import { Header } from "./components/Header"

export const  App = () =>  {
  return (
    <>
      <Header/>
      <h1>Hello world!</h1>
      <Post author='Criado por Bruna Duarte' data='28/06/2022' />
      <Post author='Criado por Ana Duarte' data='02/07/2022' />
    </>
  )
}
