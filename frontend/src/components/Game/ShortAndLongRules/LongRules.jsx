import { useTranslation } from "react-i18next";
import { CardExample } from "../CardExample/CardExample";
import css from "./ShortAndLongRules.module.css";

export const LongRules = () => {
  const { t } = useTranslation(["game"]);

  return (
    <>
      <div className={css.aboutGame}>
        <p className={css.paragraph}>
          <span className={css.subtitleParagraph}>
            {t("rules.about.title")}
          </span>
          {t("rules.about.text1")}
        </p>
        <p className={css.paragraph}>{t("rules.about.text2")}</p>
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

      <div className={css.startGame}>
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

      <div className={css.gameProcess}>
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
        <p className={css.paragraph}>{t("rules.gameProcess.text5")}</p>
        <p className={css.paragraph}>{t("rules.gameProcess.text6")}</p>
        <br />
        <p className={css.paragraph}>{t("rules.gameProcess.text7")}</p>
      </div>

      <div className={css.lifeStandard}>
        <h5 className={css.blockTitle}>{t("rules.lifeStandard.title")}</h5>
        <p className={css.paragraph}>{t("rules.lifeStandard.text1")}</p>
        <br />
        <ul className={css.lifeStandardList}>
          <li className={css.lifeStandardItem}>
            <p className={css.paragraph}>
              <span className={css.subtitleParagraph}>
                {t("rules.cardTypes.title")}
              </span>
              {t("rules.cardTypes.text1")}
            </p>

            <ul className={css.cardsLine}>
              <li className={css.card}>
                <CardExample
                  title={t("rules.cardTypes.cardsExample.card1.title")}
                  text1={t("rules.cardTypes.cardsExample.card1.text1")}
                  text2={t("rules.cardTypes.cardsExample.card1.text2")}
                  text3={t("rules.cardTypes.cardsExample.card1.text3")}
                />
              </li>
              <li className={css.card}>
                <CardExample
                  title={t("rules.cardTypes.cardsExample.card2.title")}
                  text1={t("rules.cardTypes.cardsExample.card2.text1")}
                  text2={t("rules.cardTypes.cardsExample.card2.text2")}
                  text3={t("rules.cardTypes.cardsExample.card2.text3")}
                />
              </li>
            </ul>
            <p className={css.paragraph}>{t("rules.cardTypes.text2")}</p>
            <br />
            <p className={css.paragraph}>{t("rules.cardTypes.text3")}</p>
            <br />
            <p className={css.paragraph}>{t("rules.cardTypes.text4")}</p>

            <ul className={css.cards}>
              <li className={css.card}>
                <CardExample
                  title={t("rules.cardTypes.cardsExample.card3.title")}
                  text1={t("rules.cardTypes.cardsExample.card3.text1")}
                  text2={t("rules.cardTypes.cardsExample.card3.text2")}
                  text3={t("rules.cardTypes.cardsExample.card3.text3")}
                />
              </li>
            </ul>

            <p className={css.paragraph}>{t("rules.cardTypes.text5")}</p>
            <br />
            <p className={css.paragraph}>{t("rules.cardTypes.text6")}</p>
          </li>

          <li className={css.lifeStandardItem}>
            <p className={css.paragraph}>
              <span className={css.subtitleParagraph}>
                {t("rules.work.title")}
              </span>
              {t("rules.work.text1")}
            </p>

            <ul className={css.cards}>
              <li className={css.card}>
                <CardExample
                  title={
                    <>
                      {t("rules.work.cardsExample.card1.title")}
                      <br />
                      {t("rules.work.cardsExample.card1.subtitle")}
                    </>
                  }
                  text1={t("rules.work.cardsExample.card1.text1")}
                  text2={t("rules.work.cardsExample.card1.text2")}
                  text3={t("rules.work.cardsExample.card1.text3")}
                />
              </li>
              <li className={css.card}>
                <CardExample
                  title={
                    <>
                      {t("rules.work.cardsExample.card2.title")}
                      <br />
                      {t("rules.work.cardsExample.card2.subtitle")}
                    </>
                  }
                  text1={t("rules.work.cardsExample.card2.text1")}
                  text2={t("rules.work.cardsExample.card2.text2")}
                  text3={t("rules.work.cardsExample.card2.text3")}
                />
              </li>
              <li className={css.card}>
                <CardExample
                  title={
                    <>
                      {t("rules.work.cardsExample.card3.title")}
                      <br />
                      {t("rules.work.cardsExample.card3.subtitle")}
                    </>
                  }
                  text1={t("rules.work.cardsExample.card3.text1")}
                  text2={t("rules.work.cardsExample.card3.text2")}
                  text3={t("rules.work.cardsExample.card3.text3")}
                />
              </li>
            </ul>

            <p className={css.paragraph}>{t("rules.work.text2")}</p>
          </li>

          <li className={css.lifeStandardItem}>
            <p className={css.paragraph}>
              <span className={css.subtitleParagraph}>
                {t("rules.education.title")}
              </span>
              {t("rules.education.text1")}
            </p>

            <ul className={css.cards}>
              <li className={css.card}>
                <CardExample
                  title={t("rules.education.cardsExample.card1.title")}
                  text1={t("rules.education.cardsExample.card1.text1")}
                  text2={t("rules.education.cardsExample.card1.text2")}
                  text3={t("rules.education.cardsExample.card1.text3")}
                />
              </li>
              <li className={css.card}>
                <CardExample
                  title={t("rules.education.cardsExample.card2.title")}
                  text1={t("rules.education.cardsExample.card2.text1")}
                  text2={t("rules.education.cardsExample.card2.text2")}
                  text3={t("rules.education.cardsExample.card2.text3")}
                />
              </li>
            </ul>
          </li>

          <li className={css.lifeStandardItem}>
            <p className={css.paragraph}>
              <span className={css.subtitleParagraph}>
                {t("rules.business.title")}
              </span>
              {t("rules.business.text1")}
            </p>

            <ul className={css.cardsLine}>
              <li className={css.card}>
                <CardExample
                  title={t("rules.business.cardsExample.card1.title")}
                  text1={t("rules.business.cardsExample.card1.text1")}
                  text2={t("rules.business.cardsExample.card1.text2")}
                  text3={t("rules.business.cardsExample.card1.text3")}
                />
              </li>
              <li className={css.card}>
                <CardExample
                  title={t("rules.business.cardsExample.card2.title")}
                  text1={t("rules.business.cardsExample.card2.text1")}
                  text2={t("rules.business.cardsExample.card2.text2")}
                  text3={t("rules.business.cardsExample.card2.text3")}
                />
              </li>
            </ul>

            <p className={css.paragraph}>{t("rules.business.text2")}</p>
            <br />
            <p className={css.paragraph}>{t("rules.business.text3")}</p>
          </li>

          <li className={css.lifeStandardItem}>
            <p className={css.paragraph}>
              <span className={css.subtitleParagraph}>
                {t("rules.property.title")}
              </span>
              {t("rules.property.text1")}
            </p>
            <p className={css.paragraph}>{t("rules.property.text2")}</p>
            <ul className={css.cards}>
              <li className={css.card}>
                <CardExample
                  title={t("rules.property.cardsExample.card1.title")}
                  text1={t("rules.property.cardsExample.card1.text1")}
                  text2={t("rules.property.cardsExample.card1.text2")}
                  text3={t("rules.property.cardsExample.card1.text3")}
                />
              </li>
            </ul>

            <p className={css.paragraph}>{t("rules.property.text3")}</p>
          </li>
        </ul>
      </div>

      <div className={css.health}>
        <h5 className={css.blockTitle}>{t("rules.health.title")}</h5>
        <p className={css.paragraph}>{t("rules.health.text1")}</p>
      </div>

      <div className={css.relationships}>
        <h5 className={css.blockTitle}>{t("rules.relationships.title")}</h5>
        <p className={css.paragraph}>{t("rules.relationships.text1")}</p>
      </div>

      <div className={css.bankAndExchange}>
        <h5 className={css.blockTitle}>{t("rules.bankAndExchange.title")}</h5>
        <p className={css.paragraph}>
          <span className={css.subtitleParagraph}>
            {t("rules.bankAndExchange.bank.title")}
          </span>
          {t("rules.bankAndExchange.bank.text1")}
        </p>
        <br />
        <p className={css.paragraph}>{t("rules.bankAndExchange.bank.text2")}</p>
        <br />
        <p className={css.paragraph}>
          <span className={css.subtitleParagraph}>
            {t("rules.bankAndExchange.exchange.title")}
          </span>
          {t("rules.bankAndExchange.exchange.text1")}
        </p>
        <br />
        <p className={css.paragraph}>
          <span className={css.subtitleParagraph}>
            {t("rules.bankAndExchange.bookKeeping.title")}
          </span>
          {t("rules.bankAndExchange.bookKeeping.text1")}
        </p>
        <br />
        <ul className={css.balanceList}>
          <li className={css.balanceItem}>
            <ul>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list1.item1")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list1.item2")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list1.item3")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list1.item4")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list1.item5")}
              </li>
            </ul>
          </li>
          <li className={css.balanceItem}>
            <ul>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list2.item1")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list2.item2")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list2.item3")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list2.item4")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list2.item5")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list2.item6")}
              </li>
            </ul>
          </li>
          <li className={css.balanceItem}>
            <ul>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list3.item1")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list3.item2")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list3.item3")}
              </li>
            </ul>
          </li>
          <li className={css.balanceItem}>
            <ul>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list4.item1")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list4.item2")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list4.item3")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list4.item4")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list4.item5")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list4.item6")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list4.item7")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list4.item8")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list4.item9")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list4.item10")}
              </li>
            </ul>
          </li>
          <li className={css.balanceItem}>
            <ul>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list5.item1")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list5.item2")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list5.item3")}
              </li>
              <li className={css.paragraph}>
                {t("rules.bankAndExchange.examplesOfBalance.list5.item4")}
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={css.endGame}>
        <h5 className={css.blockTitle}>{t("rules.endGame.title")}</h5>
        <p className={css.paragraph}>{t("rules.endGame.text1")}</p>
        <br />
        <p className={css.paragraph}>{t("rules.endGame.text2")}</p>
        <p className={css.paragraph}>{t("rules.endGame.text3")}</p>
        <p className={css.paragraph}>{t("rules.endGame.text4")}</p>
      </div>
    </>
  );
};
