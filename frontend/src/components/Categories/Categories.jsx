import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import icons from "../../images/symbol-defs.svg";
import { loadFromDB } from "../../loadFromDB";
import { getAllArticles } from "../../redux/operations";
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
    "sinvesticiyi-v-cinni-paperi",
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
  const getArticlesByCategory = (event) => {
    console.log(event.currentTarget);
    return loadFromDB(
      getAllArticles,
      requests[2],
      setArticles,
      ["data"],
      dispatch
    );
  };

  return (
    <ul className={css.categories}>
      <p>{articles[0]}</p>
      {keys.map((key, i) => (
        <li
          key={i}
          className={css.categoryItem}
          onClick={getArticlesByCategory}
        >
          <button>
            <svg className={css.categoryIcon}>
              <use href={`${icons}#${svgIcons[i]}`}></use>
            </svg>
            {t(key)}
          </button>
        </li>
      ))}
    </ul>
  );
};
