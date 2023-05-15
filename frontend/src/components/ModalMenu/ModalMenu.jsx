import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/globalSlice";
import icons from "../../images/symbol-defs.svg";
import css from "./ModalMenu.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ModalMenu = () => {
  const dispatch = useDispatch();
  const clickOnBackdropHandler = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };
  const onEscapeHandler = (e) => {
    if (e.code === "Escape") {
      dispatch(closeModal());
    }
  };

  const closeMenuModal = (e) => {
    dispatch(closeModal());
  };
  useEffect(() => {
    document.addEventListener("keydown", onEscapeHandler);

    return () => {
      document.removeEventListener("keydown", onEscapeHandler);
    };
  });
  const { t } = useTranslation(["header"]);
  return createPortal(
    <div
      className={css.modalBackdrop}
      id="modalBackdrop"
      onClick={clickOnBackdropHandler}
    >
      <nav className={css.mobileNavigation}>
        <ul className="liItems">
          <li className={css.navMenuItems} onClick={closeMenuModal}>
            <Link to="/" className={css.link}>
              <svg className={`${css.icon} `} width="32" height="32">
                <use href={`${icons}#icon-Game`}></use>
              </svg>
              {t("game")}
            </Link>
          </li>
          <li className={css.navMenuItems} onClick={closeMenuModal}>
            <Link to="/articles" className={css.link}>
              <svg className={`${css.icon} `} width="32" height="32">
                <use href={`${icons}#icon-Gid`}></use>
              </svg>
              {t("articles")}
            </Link>
          </li>
          <li className={css.navMenuItems} onClick={closeMenuModal}>
            <Link to="/about" className={css.link}>
              <svg className={`${css.icon} `} width="32" height="32">
                <use href={`${icons}#icon-About-Us`}></use>
              </svg>
              {t("about")}
            </Link>
          </li>
        </ul>
        <button type="button" onClick={closeMenuModal}>
          <svg className={`${css.icon} ${css.close}`} width="32" height="32">
            <use href={`${icons}#icon-closecircle`}></use>
          </svg>
        </button>
      </nav>
    </div>,
    document.querySelector("#modal")
  );
};
