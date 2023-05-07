import { useTranslation } from "react-i18next";

import css from "./Page404.module.css";
import icon404 from "../images/404.svg";

export const Page404 = () => {
  const { t } = useTranslation();
  return (
    <div className={css.container}>
      <h1 className={css.title}>Cash Genius</h1>
      {/* return <h1>{t("page404.title")}</h1>; */}
      <p className={css.text}>
        Сторінку не знайдено. Вибачте, але такої сторінки не існує, або була
        допущена помилка при введенні адреси сайту.
      </p>
      <img
        className={css.number}
        src={icon404}
        alt="icon404"
        width="112"
        height="45"
      />
    </div>
  );
};
