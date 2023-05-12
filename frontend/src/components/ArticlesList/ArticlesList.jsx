import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import css from "./ArticlesList.module.css";
import icons from "../../images/symbol-defs.svg";

export const ArticlesList = ({ artList, category }) => {
  const { t } = useTranslation(["categories"]);
  // console.log(category);
  // console.log(artList);
  let screenWidth = window.innerWidth;
  const [width, setWidth] = useState(screenWidth);

  // Function to handle the resize event
  function handleResize() {
    screenWidth = window.innerWidth;
    setWidth(screenWidth);
    // You can perform any additional logic or actions here
  }

  // Add event listener for the resize event
  window.addEventListener("resize", handleResize);

  useEffect(() => {
    const categoriesList = document.querySelector("[data-categories]");
    const categHidden = categoriesList.classList.contains("visually-hidden");
    const articlesList = document.querySelector("[data-articles]");
    if (width >= 768) {
      articlesList.classList.remove("visually-hidden");
      categoriesList.classList.remove("visually-hidden");
    } else if (categHidden) articlesList.classList.remove("visually-hidden");
    else articlesList.classList.add("visually-hidden");
  }, [width]);

  const backToCategories = () => {
    const categoriesList = document.querySelector("[data-categories]");
    //  const categHidden = categoriesList.classList.contains("visually-hidden");
    const articlesList = document.querySelector("[data-articles]");

    articlesList.classList.add("visually-hidden");
    categoriesList.classList.remove("visually-hidden");
  };

  // console.log(artList);
  return (
    <div className={css.articlesWrapper} data-articles>
      {/* {width >= 768 && ( */}
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
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* )} */}
      {}
    </div>
  );
};
