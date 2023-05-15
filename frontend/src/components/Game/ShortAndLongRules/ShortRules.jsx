import { useTranslation } from "react-i18next";
import css from "./ShortAndLongRules.module.css";
import classNames from "classnames";

export const ShortRules = ({ handleClick }) => {
  const { t } = useTranslation(["game"]);

  return (
    <>
      <p className={css.paragraph}>
        <span className={css.subtitleParagraph}>{t("rules.about.title")}</span>
        {t("rules.about.text1")}
      </p>
      <p className={css.paragraph}>{t("rules.about.text2")}</p>

      <div className={classNames(css.aboutGame, css.mobile)}>
        <p className={css.paragraph}>{t("rules.about.text3")}</p>
        <p className={css.paragraph}>
          <span className={css.subtitleParagraph}>{t("rules.goal.title")}</span>
          {t("rules.goal.text1")}
        </p>
        <p className={css.paragraph}>
          <span className={css.subtitleParagraph}>
            {t("rules.gameplay.title")}
          </span>
          {t("rules.gameplay.text1")}
        </p>
      </div>

      <div className={classNames(css.startGame, css.mobile)}>
        <h5 className={css.subtitle}>{t("rules.start.title")}</h5>
        <p className={css.paragraph}>{t("rules.start.subtitle")}</p>
        <p className={css.paragraph}>{t("rules.start.characters.text1")}</p>
        <p className={css.paragraph}>{t("rules.start.characters.text2")}</p>
        <p className={css.paragraph}>{t("rules.start.characters.text3")}</p>
        <br />
        <p className={css.paragraph}>{t("rules.start.text1")}</p>
        <br />
        <p className={css.paragraph}>{t("rules.start.text2")}</p>
        <br />
        <p className={css.paragraph}>{t("rules.start.text3")}</p>
      </div>

      <div className={classNames(css.gameProcess, css.mobile)}>
        <h5 className={css.blockTitle}>{t("rules.gameProcess.title")}</h5>
        <p className={css.paragraph}>
          <span className={css.subtitleParagraph}>
            {t("rules.gameProcess.time")}
          </span>
          {t("rules.gameProcess.text1")}
        </p>
        <br />
        <p className={css.paragraph}>{t("rules.gameProcess.text2")}</p>
        <p className={css.paragraph}>{t("rules.gameProcess.text3")}</p>
        <p className={css.paragraph}>{t("rules.gameProcess.text4")}</p>
      </div>
      <button className={css.openRulesBtn} onClick={handleClick}>
        {t("rules.button")}
      </button>
    </>
  );
};
