import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./ArticlesList.module.css";
import icons from "../../images/symbol-defs.svg";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/selectors";
import {
  setCategory,
  setCurrentPage,
  setIsSelected,
} from "../../redux/categorySlice";
import { keys, requests, svgIcons } from "../../categoriesList";
import { loadFromDB } from "../../loadFromDB";
import { getAllArticles } from "../../redux/operations";

export const ArticlesList = ({ artList, category, loadArticles }) => {
  const { t } = useTranslation(["articles"]);
  const [width, setWidth] = useState(window.innerWidth);
  const { isSelected } = useSelector(selectCategory);
  const { currentPage, morePages } = useSelector(selectCategory);

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

  const loader = (
    category,
    params = { params: { page: 1, num_articles: 6 } }
  ) => {
    const loadContent = loadFromDB(
      getAllArticles,
      category,
      loadArticles,
      ["data", "data"],
      dispatch,
      params
    );
    loadContent();
  };

  const loadNextPage = () => {
    const requestIndex = keys.indexOf(category);
    loader(requests[requestIndex], {
      params: { page: currentPage + 1, num_articles: 6 },
    });
    dispatch(setCurrentPage(currentPage + 1));
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
          <ArticlePreview
            key={article.pk}
            article={article}
            category={category}
          />
        ))}
      </ul>
      {morePages && (
        <button type="button" className={css.moreButton} onClick={loadNextPage}>
          {t("more")}
        </button>
      )}
    </div>
  );
};
