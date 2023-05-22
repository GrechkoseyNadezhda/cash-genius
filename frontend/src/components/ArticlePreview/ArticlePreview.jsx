import { Link, useLocation } from "react-router-dom";
import css from "./ArticlePreview.module.css";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../redux/selectors";

export const ArticlePreview = ({ category, article }) => {
  const location = useLocation();
  const { lang } = useSelector(selectGlobal);
  const title = lang === "ua" ? article.title : article.english_version?.title;
  const content =
    lang === "ua" ? article.content : article.english_version?.content;
  return (
    <Link to={`/articles/${category}/${article.pk}`} state={{ from: location }}>
      <div>
        <img src={article.image} alt="" className={css.picture} />
        <p className={css.date}>{article.date_added}</p>
        <h3 className={css.artTitle}>{title}</h3>
        <p
          className={css.contentWrapper}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content),
          }}
        ></p>
      </div>
    </Link>
  );
};
