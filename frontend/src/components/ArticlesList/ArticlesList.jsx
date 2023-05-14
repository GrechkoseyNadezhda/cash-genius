import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./ArticlesList.module.css";
import icons from "../../images/symbol-defs.svg";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/selectors";
import { setCategory, setIsSelected } from "../../redux/categorySlice";
import { keys, svgIcons } from "../../categoriesList";

export const ArticlesList = ({ artList, category }) => {
  const { t } = useTranslation(["categories"]);
  const [width, setWidth] = useState(window.innerWidth);
  const { isSelected } = useSelector(selectCategory);
  const dispatch = useDispatch();

  const iconIndex = keys.indexOf(category);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  const removeActive = () => {
    const categoriesList = document.querySelector("[data-categories]");
    const listItems = categoriesList.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("active");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const categoriesList = document.querySelector("[data-categories]");
    const articlesList = document.querySelector("[data-articles]");
    if (width >= 768) {
      articlesList.classList.remove("visually-hidden");
      categoriesList.classList.remove("visually-hidden");
    } else if (isSelected) {
      articlesList.classList.remove("visually-hidden");
      categoriesList.classList.add("visually-hidden");
    } else {
      articlesList.classList.add("visually-hidden");
      categoriesList.classList.remove("visually-hidden");
      removeActive();
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const backToCategories = () => {
    const categoriesList = document.querySelector("[data-categories]");
    const articlesList = document.querySelector("[data-articles]");
    removeActive();
    articlesList.classList.add("visually-hidden");
    categoriesList.classList.remove("visually-hidden");
    dispatch(setIsSelected(false));
    dispatch(setCategory("all"));
  };

  return (
    <div className={css.articlesWrapper} data-articles>
      <svg className={css.backArrow} onClick={backToCategories}>
        <use href={`${icons}#left-arrow`}></use>
      </svg>
      <h2 className={css.titleField}>
        <svg className={css.categoryIcon}>
          <use href={`${icons}#${svgIcons[iconIndex]}`}></use>
        </svg>
        <span className={css.title}>{t(category)}</span>
      </h2>
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
