import { Link, useLocation } from "react-router-dom";
import css from "./ArticlePreview.module.css";
export const ArticlePreview = ({ category, article }) => {
  const location = useLocation();
  return (
    <Link to={`/articles/${category}/${article.pk}`} state={{ from: location }}>
      <div>
        <img src={article.image} alt="" className={css.picture} />
        <p className={css.date}>{article.date_added}</p>
        <h3 className={css.artTitle}>{article.title}</h3>
        <p className={css.content}>{article.content}</p>
      </div>
    </Link>
    // <Link to={`${post.pk}`} state={{ from: location }}>
    //   <h4>{post.title}</h4>
    //   <h5>{post.author}</h5>
    //   <p>{post.content}</p>
    //   <p>{post.date_added}</p>
    //   <img src={`${post.image}`} alt="" />
    // </Link>
  );
};
