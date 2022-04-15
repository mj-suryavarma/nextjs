import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/styles.module.css';
import ArticlesList from '../components/Articles';
import { server } from '../config';


export default function Home({articles}) {

   console.log(articles)


  return (
    <div >
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
        <ArticlesList articles={articles} /> 
    </div>
  )
}

  
export const getStaticProps = async() => {

  // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const res = await fetch(`${server}/api/articles`);

   const articles = await res.json();

   return {
     props : {
       articles
     }
   }
   
}