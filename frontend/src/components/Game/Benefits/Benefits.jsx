import { useTranslation } from "react-i18next";
import icons from "../../../images/symbol-defs.svg";
import css from "./Benefits.module.css";

export const Benefits = () => {
  const { t } = useTranslation(["game"]);

  const cards = [
    {
      cardIcon: "icon-game-finance",
      cardTitle: "benefits.titleCard1",
      cardDescr: "benefits.descriptionCard1",
    },
    {
      cardIcon: "icon-game-time",
      cardTitle: "benefits.titleCard2",
      cardDescr: "benefits.descriptionCard2",
    },
    {
      cardIcon: "icon-game-money",
      cardTitle: "benefits.titleCard3",
      cardDescr: "benefits.descriptionCard3",
    },
  ];

  return (
    <section className={css.benefits}>
      <div className="container">
        <h2 className={css.title}>
          {t("benefits.title1")}{" "}
          <span className={css.titleGradient}>Cash Genius</span>
          {t("benefits.title2")}
        </h2>

        <ul className={css.benefitsList}>
          {cards.map((card, idx) => {
            return (
              <li key={idx} className={css.benefitsItem}>
                <svg className={css.benefitsIcon}>
                  <use href={`${icons}#${card.cardIcon}`}></use>
                </svg>
                <h3 className={css.cardTitle}>{t(`${card.cardTitle}`)}</h3>
                <p className={css.cardDescr}>{t(`${card.cardDescr}`)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
