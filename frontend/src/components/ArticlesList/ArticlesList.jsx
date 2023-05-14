import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import css from "./ArticlesList.module.css";
import icons from "../../images/symbol-defs.svg";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/selectors";
import { setCategory, setIsSelected } from "../../redux/categorySlice";

export const ArticlesList = ({ artList, category }) => {
  const { t } = useTranslation(["categories"]);
  let screenWidth = window.innerWidth;
  const [width, setWidth] = useState(screenWidth);
  window.addEventListener("resize", handleResize);
  const { isSelected } = useSelector(selectCategory);
  const dispatch = useDispatch();

  function handleResize() {
    screenWidth = window.innerWidth;
    setWidth(screenWidth);
  }

  useEffect(() => {
    const categoriesList = document.querySelector("[data-categories]");
    // const catIsSelected = categoriesList.classList.contains("selected");
    const articlesList = document.querySelector("[data-articles]");
    if (width >= 768) {
      articlesList.classList.remove("visually-hidden");
      categoriesList.classList.remove("visually-hidden");
    } else if (isSelected) {
      articlesList.classList.remove("visually-hidden");
      categoriesList.classList.add("visually-hidden");
    } else {
      console.log("inside");
      articlesList.classList.add("visually-hidden");
      categoriesList.classList.remove("visually-hidden");
      const listItems = categoriesList.getElementsByTagName("li");
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
      }
      console.log("removed!");
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
    // categoriesList.classList.remove("selected");
    dispatch(setIsSelected(false));
    dispatch(setCategory("all"));
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
            <ArticlePreview article={article} category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};
