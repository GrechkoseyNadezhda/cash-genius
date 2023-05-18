import { Link, useLocation } from "react-router-dom";
import css from "./ArticlePreview.module.css";
import DOMPurify from "dompurify";
export const ArticlePreview = ({ category, article }) => {
  const location = useLocation();
  return (
    <Link to={`/articles/${category}/${article.pk}`} state={{ from: location }}>
      <div>
        <img src={article.image} alt="" className={css.picture} />
        <p className={css.date}>{article.date_added}</p>
        <h3 className={css.artTitle}>{article.title}</h3>
        <p
          className={css.content}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article.content),
          }}
        >
          {/* {article.content} */}
        </p>
      </div>
    </Link>
  );
};
