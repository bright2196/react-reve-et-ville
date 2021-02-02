import React from 'react'
import Menu from 'components/Menu'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Menu />
      Page d'accueil
    </div>
  )
}

export default Home
