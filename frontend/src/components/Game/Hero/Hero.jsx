import { useTranslation } from "react-i18next";
import css from "./Hero.module.css";

export const Hero = () => {
  const { t } = useTranslation(["game"]);

  return (
    <section className={css.hero}>
      <div className="container">
        <div className={css.wrap}>
          <h1 className={css.title}>{t("mainTitle")} Cash Genius</h1>
          <p className={css.subtitle}>{t("subtitle")}</p>
          <a className={css.link} href="https://t.me/Cash_Genius_Bot">
            {t("link")}
          </a>
        </div>
      </div>
    </section>
  );
};
