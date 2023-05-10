import { useTranslation } from "react-i18next";
import icons from "../../images/symbol-defs.svg";
import css from "./Categories.module.css";

export const Categories = () => {
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
  return (
    <ul className={css.categories}>
      {keys.map((key, i) => (
        <li key={i} className={css.categoryItem}>
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
