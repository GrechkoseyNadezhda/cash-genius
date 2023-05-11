import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openModal, setLanguage } from "../../redux/globalSlice";
import css from "./Header.module.css";
import icons from "../../images/symbol-defs.svg";
import { selectGlobal } from "../../redux/selectors";
import { ModalMenu } from "../ModalMenu/ModalMenu";

export const Header = ({ reset }) => {
  const { t, i18n } = useTranslation(["header"]);
  const dispatch = useDispatch();
  const { modalMenuOpened } = useSelector(selectGlobal);

  const openModalMenu = () => {
    dispatch(openModal());
  };

  return (
    <header className={"container " + css.headContainer}>
      {modalMenuOpened && <ModalMenu />}
      <Link to="/">
        <span className={css.logo}>Cash Genius</span>
      </Link>
      <nav className={css.navigation}>
        <ul className={css.mainNav}>
          <li>
            <Link to="/" className={css.menuItem}>
              {t("game")}
            </Link>
          </li>
          <li>
            <Link to="/articles" className={css.menuItem} onClick={reset}>
              {t("articles")}
            </Link>
          </li>
          <li>
            <Link to="/about" className={css.menuItem}>
              {t("about")}
            </Link>
          </li>
        </ul>
        <div className={css.langBurger}>
          <ul className={css.langBar}>
            <li>
              <button
                type="button"
                className={css.icon}
                onClick={() => {
                  i18n.changeLanguage("en");
                  dispatch(setLanguage("en"));
                }}
              >
                <svg className={css.flagsIcons}>
                  <use href={`${icons}#icon-United-States-of-America-US`}></use>
                </svg>
              </button>
            </li>

            <li>
              <button
                type="button"
                className={css.icon}
                onClick={() => {
                  i18n.changeLanguage("ua");
                  dispatch(setLanguage("ua"));
                }}
              >
                <svg className={css.flagsIcons}>
                  <use href={`${icons}#icon-Ukr-flag`}></use>
                </svg>
              </button>
            </li>
          </ul>
          <button type="button" onClick={openModalMenu} className={css.burger}>
            <svg className={css.icon} width="32" height="32">
              <use href={`${icons}#icon-menu`}></use>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
