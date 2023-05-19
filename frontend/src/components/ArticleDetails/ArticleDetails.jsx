import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { loadFromDB } from "../../loadFromDB";
import { getArticleById } from "../../redux/operations";
import icons from "../../images/symbol-defs.svg";
import css from "./ArticleDetails.module.css";
import { keys, svgIcons } from "../../categoriesList";
import DOMPurify from "dompurify";
import { TextFormatted } from "../TextFormatted/TextFormatted";

export const ArticleDetails = () => {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();
  const { category } = useParams();
  const location = useLocation();
  const { t } = useTranslation(["articles"]);
  const dispatch = useDispatch();
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

  return (
    <div className="container">
      <h1 className={css.pageTitle}>{t("title")}</h1>
      <div className={css.flexTitle}>
        <div className={css.backNavigation}>
          <Link to={location.state.from}>
            <div className={css.backToCategory}>
              <svg className={css.backArrow}>
                <use href={`${icons}#left-arrow`}></use>
              </svg>
              <div className={css.arrowText}>{t("back")}</div>
            </div>
            <h2 className={css.titleField}>
              <svg className={css.categoryIcon}>
                <use href={`${icons}#${svgIcons[iconIndex]}`}></use>
              </svg>
              <span className={css.title}>{t(`${category}`)}</span>
            </h2>
          </Link>
        </div>
        <div className={css.rightPosition}>
          <p className={css.dateMobile}>{article.date_added}</p>
          <h3 className={css.artTitle}>{article.title}</h3>
          <p className={css.dateTablet}>{article.date_added}</p>
          <img className={css.picture} src={article.image} alt="" />
          <TextFormatted content={article.content} />
          {/* <p
            className={css.content}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(article.content),
            }}
          ></p> */}
        </div>
      </div>
      <Link to={location.state.from} className={css.mobileArrow}>
        <svg className={css.backArrow}>
          <use href={`${icons}#left-arrow`}></use>
        </svg>
      </Link>
    </div>
  );
};
