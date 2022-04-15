import React from 'react'
import Link from 'next/link';
import articleStyle from '../styles/Articles.module.css';


const ArticleItem = ({article}) => {
  return (
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <a className={articleStyle.card}>
         <h3>{article.title} &rarr;</h3>
         <p>{article.body}</p>
        </a>
      </Link>
  )
}

export default ArticleItem