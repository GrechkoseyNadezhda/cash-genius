import { useTranslation } from "react-i18next";
import icons from "../../images/symbol-defs.svg";
import css from "./Footer.module.css";

export const Footer = () => {
  const { t } = useTranslation(["footer"]);

  return (
    <footer className={"container " + css.footer}>
      <span className={css.logo}>Cash Genius</span>
      <div className={css.contactInfo}>
        <p className={css.contactTitle}>{t("contact")}</p>
        <a className={css.contactLink} href="mailto:cashgenius23@gmail.com">
          <svg className={css.contactIcon}>
            <use href={`${icons}#icon-Email`}></use>
          </svg>
          <p className={css.contactMail}>cashgenius23@gmail.com</p>
        </a>
      </div>
    </footer>
  );
};
