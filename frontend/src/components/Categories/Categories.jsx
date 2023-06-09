import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import icons from "../../images/symbol-defs.svg";
import { loadFromDB } from "../../loadFromDB";
import { setCategory, setIsSelected } from "../../redux/categorySlice";
import { getAllArticles } from "../../redux/operations";
import { selectCategory } from "../../redux/selectors";
import css from "./Categories.module.css";
import { keys, requests, svgIcons } from "../../categoriesList";
// import { requests } from "../../categoriesList";
// import { svgIcons } from "../../categoriesList";

export const Categories = ({ loadArticles }) => {
  const { t } = useTranslation(["articles"]);

  const dispatch = useDispatch();
  const { categorySelected, isSelected } = useSelector(selectCategory);

  const [width, setWidth] = useState(
    window.innerWidth >= 768 ? "big" : "small"
  );

  function handleResize() {
    if (window.innerWidth >= 768 && width === "small") setWidth("big");
    else if (window.innerWidth < 768 && width === "big") setWidth("small");
  }

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

  const addActiveCategory = (num) => {
    const categoriesList = document.querySelector("[data-categories]");
    categoriesList.classList.add("selected");
    const listItems = categoriesList.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
      if (i === num) {
        listItems[i].classList.add("active");
      } else {
        listItems[i].classList.remove("active");
      }
    }
  };

  const getArticlesByCategory = (num) => {
    const categoriesList = document.querySelector("[data-categories]");
    const articlesList = document.querySelector("[data-articles]");
    loader(requests[num], { params: { page: 1, num_articles: 6 } });
    dispatch(setCategory(keys[num]));
    dispatch(setIsSelected(true));
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      categoriesList.classList.add("visually-hidden");
      articlesList.classList.remove("visually-hidden");
    }
    addActiveCategory(num);
  };

  useEffect(() => {
    const number = keys.indexOf(categorySelected);
    loader(requests[number], { params: { page: 1, num_articles: 6 } });
    if (width === "big") addActiveCategory(number);
    dispatch(setCategory(categorySelected));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width === "big") {
      const categoriesList = document.querySelector("[data-categories]");
      categoriesList.classList.remove("visually-hidden");
      if (!isSelected) {
        addActiveCategory(0);
        // loader("financial_guide", { params: { page: 1, num_articles: 6 } });
        dispatch(setCategory("all"));
      }
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <ul className={css.categories} data-categories>
      {keys.map((key, i) => (
        <li
          key={i}
          className={css.categoryItem}
          onClick={() => getArticlesByCategory(i)}
        >
          <div className={css.categoryButton}>
            <svg className={css.categoryIcon}>
              <use href={`${icons}#${svgIcons[i]}`}></use>
            </svg>
            <span className={css.name}>{t(key)}</span>
            <svg className={css.categoryArrow}>
              <use href={`${icons}#right-arrow`}></use>
            </svg>
          </div>
        </li>
      ))}
    </ul>
  );
};
