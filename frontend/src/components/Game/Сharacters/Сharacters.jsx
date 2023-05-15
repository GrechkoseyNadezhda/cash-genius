import { useTranslation } from "react-i18next";

import caracterAdele1 from "../../../images/game/characters/adele-desk.jpg";
import caracterAdele2 from "../../../images/game/characters/adele-desk@2x.jpg";
import caracterEugene1 from "../../../images/game/characters/eugene-desk.jpg";
import caracterEugene2 from "../../../images/game/characters/eugene-desk@2x.jpg";
import caracterMichael1 from "../../../images/game/characters/michael-desk.jpg";
import caracterMichael2 from "../../../images/game/characters/michael-desk@2x.jpg";

import css from "./Сharacters.module.css";

const charactersData = [
  { img1: caracterAdele1, img2: caracterAdele2 },
  { img1: caracterEugene1, img2: caracterEugene2 },
  { img1: caracterMichael1, img2: caracterMichael2 },
];

export const Сharacters = () => {
  const { t } = useTranslation(["game"]);

  return (
    <section className={css.characters}>
      <div className="container">
        <h2 className={css.title}>{t("charactersTitle")}</h2>

        <ul className={css.characterList}>
          {charactersData.map((character, idx) => {
            return (
              <li key={idx} className={css.characterItem}>
                <div className={css.imageWrap}>
                  <img
                    srcSet={(character.img1, character.img2)}
                    src={character.img1}
                    alt="character"
                    className={css.characterImage}
                  />
                </div>
                <div className={css.characterInfo}>
                  <h4 className={css.characterName}>
                    {t(`character${idx}.name`)}
                  </h4>
                  <ul className={css.characterInfoList}>
                    <li className={css.characterInfoItem}>
                      {t(`character${idx}.description`)}
                    </li>
                    <li className={css.characterInfoItem}>
                      {t(`character${idx}.level`)}
                    </li>
                    <li className={css.characterInfoItem}>
                      {t(`character${idx}.family`)}
                    </li>
                    <li className={css.characterInfoItem}>
                      {t(`character${idx}.friends`)}
                    </li>
                    <li className={css.characterInfoItem}>
                      {t(`character${idx}.money`)}
                    </li>
                    <li className={css.characterInfoItem}>
                      {t(`character${idx}.property`)}
                    </li>
                    <li className={css.characterInfoItem}>
                      {t(`character${idx}.strength`)}
                    </li>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
