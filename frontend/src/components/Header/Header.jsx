import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLanguage } from "../../redux/globalSlice";
import css from "./Header.module.css";
import icons from "../../images/symbol-defs.svg";

export const Header = () => {
  const { t, i18n } = useTranslation(["header"]);
  const dispatch = useDispatch();
  const lngs = {
    en: { langName: "English" },
    ua: { langName: "Українська" },
  };
  return (
    <header className={"container " + css.headContainer}>
      {/* <nav>
        <Link to="/">{t("game")}</Link>
        <Link to="/articles">{t("articles")}</Link>
        <Link to="/about"> {t("about")}</Link>
      </nav> */}
      <span>Cash Genius</span>
      <ul>
        <li>
          <svg width="20" height="16">
            <use href={`${icons}#icon-United-States-of-America-US`}></use>
          </svg>
        </li>

        <li>
          <svg width="20" height="16">
            <use href={`${icons}#icon-Ukr-flag`}></use>
          </svg>
        </li>
        <li>
          <svg className={css.burger} width="32" height="32">
            <use href="./b2.svg"></use>
          </svg>
        </li>
      </ul>

      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng);
              dispatch(setLanguage(lng));
            }}
          >
            {lngs[lng].langName}
          </button>
        ))}
      </div>
    </header>
  );
};
