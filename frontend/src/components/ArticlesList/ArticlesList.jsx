import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import css from "./ArticlesList.module.css";
import icons from "../../images/symbol-defs.svg";

export const ArticlesList = ({ artList, category }) => {
  const { t } = useTranslation(["categories"]);
  let screenWidth = window.innerWidth;
  const [width, setWidth] = useState(screenWidth);
  window.addEventListener("resize", handleResize);

  function handleResize() {
    screenWidth = window.innerWidth;
    setWidth(screenWidth);
  }

  useEffect(() => {
    const categoriesList = document.querySelector("[data-categories]");
    const catIsSelected = categoriesList.classList.contains("selected");
    const articlesList = document.querySelector("[data-articles]");
    if (width >= 768) {
      articlesList.classList.remove("visually-hidden");
      categoriesList.classList.remove("visually-hidden");
    } else if (catIsSelected) {
      articlesList.classList.remove("visually-hidden");
      categoriesList.classList.add("visually-hidden");
    } else {
      articlesList.classList.add("visually-hidden");
      categoriesList.classList.remove("visually-hidden");
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const backToCategories = () => {
    const categoriesList = document.querySelector("[data-categories]");
    const articlesList = document.querySelector("[data-articles]");
    const listItems = categoriesList.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("active");
    }
    articlesList.classList.add("visually-hidden");
    categoriesList.classList.remove("visually-hidden");
    categoriesList.classList.remove("selected");
  };

  return (
    <div className={css.articlesWrapper} data-articles>
      <svg className={css.backArrow} onClick={backToCategories}>
        <use href={`${icons}#left-arrow`}></use>
      </svg>
      <h2 className={css.title}>{t(category)}</h2>
      <ul className={css.articlesList}>
        {artList?.map((article) => (
          <li key={article.pk} className={css.artCard}>
            <Link to={`/articles/${article.pk}`}>
              <div>
                <img src={article.image} alt="" className={css.picture} />
                <p className={css.date}>{article.date_added}</p>
                <h3 className={css.artTitle}>{article.title}</h3>
                <p className={css.content}>{article.content}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
