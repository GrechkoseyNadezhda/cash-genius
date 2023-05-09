import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openModal, setLanguage } from "../../redux/globalSlice";
import css from "./Header.module.css";
import icons from "../../images/symbol-defs.svg";
import { selectGlobal } from "../../redux/selectors";
import { ModalMenu } from "../ModalMenu/ModalMenu";

export const Header = () => {
  const { t, i18n } = useTranslation(["header"]);
  const dispatch = useDispatch();
  const { modalMenuOpened } = useSelector(selectGlobal);

  const openModalMenu = () => {
    dispatch(openModal());
  };

  return (
    <header className={"container " + css.headContainer}>
      {modalMenuOpened && <ModalMenu />}
      <span className={css.logo}>Cash Genius</span>
      <div className={css.langBurger}>
        <ul className={css.langBar}>
          <li
            onClick={() => {
              i18n.changeLanguage("en");
              dispatch(setLanguage("en"));
            }}
          >
            <svg className={css.icon} width="20" height="16">
              <use href={`${icons}#icon-United-States-of-America-US`}></use>
            </svg>
          </li>

          <li
            onClick={() => {
              i18n.changeLanguage("ua");
              dispatch(setLanguage("ua"));
            }}
          >
            <svg className={css.icon} width="20" height="16">
              <use href={`${icons}#icon-Ukr-flag`}></use>
            </svg>
          </li>
        </ul>
        <button type="button" onClick={openModalMenu}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${icons}#icon-menu`}></use>
          </svg>
        </button>
      </div>
      {/* <div>
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
      </div> */}
    </header>
  );
};

/* <nav>
        <Link to="/">{t("game")}</Link>
        <Link to="/articles">{t("articles")}</Link>
        <Link to="/about"> {t("about")}</Link>
      </nav> */
