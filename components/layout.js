import React from 'react';
import styles  from '../styles/styles.module.css';
import Nav from './nav';
import Header from './header';


const layout = ({children}) => {
  return (
    <div className={styles.container}>
    <Nav />
    <main className={styles.main}>
    <Header />   
   <h2 >
    This is our layout
    </h2>
    {children}
    </main>
    </div>
  )
}

export default layout