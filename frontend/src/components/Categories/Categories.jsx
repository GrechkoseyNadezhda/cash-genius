import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import icons from "../../images/symbol-defs.svg";
import { loadFromDB } from "../../loadFromDB";
import { getAllArticles } from "../../redux/operations";
import css from "./Categories.module.css";

export const Categories = ({ loadArticles, loadCategory }) => {
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
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();
  const loader = (category) => {
    const loady = loadFromDB(
      getAllArticles,
      category,
      setArticles,
      ["data"],
      dispatch
    );
    loady();
  };

  const getArticlesByCategory = (num) => {
    const addActiveCategory = () => {
      const listItems = categoriesList.getElementsByTagName("li");

      for (let i = 0; i < listItems.length; i++) {
        if (i === num) {
          listItems[i].classList.add("active");
        } else {
          listItems[i].classList.remove("active");
        }
      }
    };
    loader(requests[num]);
    loadCategory(keys[num]);
    console.log(keys[num]);
    const screenWidth = window.innerWidth;
    const categoriesList = document.querySelector("[data-categories]");
    const articlesList = document.querySelector("[data-articles]");
    if (screenWidth < 768) {
      categoriesList.classList.add("visually-hidden");
      articlesList.classList.remove("visually-hidden");
    }
    addActiveCategory(num);
  };

  // const categoriesList = document.querySelector("[data-categories]");

  useEffect(() => {
    loader("financial_guide");
    loadCategory("all");
    document.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    loadArticles(articles);
  }, [articles, loadArticles]);

  let screenWidth = window.innerWidth;
  const [width, setWidth] = useState(screenWidth);

  function handleResize() {
    screenWidth = window.innerWidth;
    setWidth(screenWidth);
  }

  // window.addEventListener("resize", handleResize);

  useEffect(() => {
    if (width >= 768) {
      const categoriesList = document.querySelector("[data-categories]");
      categoriesList.classList.remove("visually-hidden");
    }
  }, [width]);

  return (
    <ul className={css.categories} data-categories>
      {/* <p>{articles[0]}</p> */}
      {keys.map((key, i) => (
        <li
          key={i}
          className={css.categoryItem}
          onClick={() => getArticlesByCategory(i)}
        >
          <div className={css.categoryButton}>
            {/* <div className={css.iconName}> */}
            <svg className={css.categoryIcon}>
              <use href={`${icons}#${svgIcons[i]}`}></use>
            </svg>
            <span className={css.name}>{t(key)}</span>
            {/* </div> */}
            <svg className={css.categoryArrow}>
              <use href={`${icons}#right-arrow`}></use>
            </svg>
          </div>
        </li>
      ))}
    </ul>
  );
};
