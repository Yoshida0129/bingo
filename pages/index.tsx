import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Footer from './footer'
import Header from './header'
import Main from './main'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
