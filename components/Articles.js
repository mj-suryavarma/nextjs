import articleStyle from '../styles/Articles.module.css';
import ArticleItem from './ArticleItem';


const ArticlesList = ({articles}) => {
  return (
    <div className={articleStyle.grid}>
      {articles.map((article => ( 
      
      <ArticleItem article={article} />
      ) 
      
      ))}
    </div>
  )
}

export default ArticlesList