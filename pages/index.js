import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/styles.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h2>Welcome to Next js Course</h2>
    </div>
  )
}
