import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { loadFromDB } from "../../loadFromDB";
import { getArticleById } from "../../redux/operations";
import { selectGlobal } from "../../redux/selectors";
import icons from "../../images/symbol-defs.svg";
import css from "./ArticleDetails.module.css";
import { keys, svgIcons } from "../../categoriesList";

export const ArticleDetails = () => {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();
  const { category } = useParams();
  const location = useLocation();
  const { t } = useTranslation(["categories", "articles"]);
  const dispatch = useDispatch();
  const { error, pending, lang } = useSelector(selectGlobal);
  const iconIndex = keys.indexOf(category);

  const loader = () => {
    const loady = loadFromDB(
      getArticleById,
      articleId,
      setArticle,
      ["data"],
      dispatch
    );
    loady();
  };

  useEffect(() => {
    loader();
  }, []);

  const backToCategory = () => {};

  return (
    <div className="container">
      <p>{error}</p>
      {pending && <p>Loading data...</p>}
      <h1 className={css.pageTitle}>{t("title", { ns: "articles" })}</h1>
      <h2 className={css.titleField}>
        <svg className={css.categoryIcon}>
          <use href={`${icons}#${svgIcons[iconIndex]}`}></use>
        </svg>
        <span className={css.title}>{t(`${category}`)}</span>
      </h2>
      <p className={css.date}>{article.date_added}</p>
      <h3 className={css.artTitle}>{article.title}</h3>
      <img className={css.picture} src={article.image} alt="" />
      <p className={css.content}>{article.content}</p>
      <Link to={location.state.from}>
        <svg className={css.backArrow} onClick={backToCategory}>
          <use href={`${icons}#left-arrow`}></use>
        </svg>
      </Link>
    </div>
  );
};
