import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import icons from "../../images/symbol-defs.svg";
import { loadFromDB } from "../../loadFromDB";
import { setCategory, setIsSelected } from "../../redux/categorySlice";
import { getAllArticles } from "../../redux/operations";
import { selectCategory } from "../../redux/selectors";
import css from "./Categories.module.css";

export const Categories = ({ loadArticles }) => {
  const { t } = useTranslation(["categories"]);
  const keys = [
    "all",
    "overall",
    "personal",
    "family",
    "deposit",
    "stocks",
    "insurance",
    "addictions",
    "taxes",
    "help",
    "dps",
    "pf",
  ];
  const requests = [
    "financial_guide",
    "zagalni-pitannya",
    "osobistij-byudzhet",
    "simejnij-byudzhet",
    "bankivskij-depozit",
    "investiciyi-v-cinni-paperi",
    "strahuvannya",
    "shkidlivi-perekonannya",
    "podatki-pilgi",
    "dopomogi",
    "dps-ukrayini",
    "pfu",
  ];
  const svgIcons = [
    "",
    "icon-General",
    "icon-Own-Budget",
    "icon-Fam-Budget",
    "icon-Deposit",
    "icon-Bag",
    "icon-Insurance",
    "icon-Bad",
    "icon-Tax",
    "icon-Help",
    "icon-STS-Ukr",
    "icon-PFU",
  ];
  const dispatch = useDispatch();
  const { categorySelected, isSelected } = useSelector(selectCategory);

  const [width, setWidth] = useState(
    window.innerWidth >= 768 ? "big" : "small"
  );

  function handleResize() {
    if (window.innerWidth >= 768 && width === "small") setWidth("big");
    else if (window.innerWidth < 768 && width === "big") setWidth("small");
  }

  const loader = (category) => {
    const loadContent = loadFromDB(
      getAllArticles,
      category,
      loadArticles,
      ["data"],
      dispatch
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
    loader(requests[num]);
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
    loader(requests[number]);
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
        loader("financial_guide");
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
