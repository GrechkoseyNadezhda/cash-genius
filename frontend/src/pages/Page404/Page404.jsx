import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAboutInfo } from "../../redux/operations";
import { selectGlobal } from "../../redux/selectors";
import { loadFromDB } from "../../loadFromDB";

import { useTranslation } from "react-i18next";
import css from "./Page404.module.css";
import icon404 from "../../images/partners/404.svg";

export const Page404 = () => {
  const { t } = useTranslation(["page404"]);

  const [aboutInfo, setAboutInfo] = useState("");
  const { lang, error, pending } = useSelector(selectGlobal);
  const dispatch = useDispatch();
  const loader = useMemo(
    () => loadFromDB(getAboutInfo, setAboutInfo, ["statusText"], dispatch),
    [dispatch]
  );
  useEffect(() => loader(), [loader]);

  return (
    <div className={css.container}>
      {/* <header>HEADER</header> */}
      <h1 className={css.title}>Cash Genius</h1>
      <p className={css.text}>{t("text1")}</p>
      <p className={css.text}> {t("text2")}</p>
      <img
        className={css.number}
        src={icon404}
        alt="icon404"
        width="112"
        height="45"
      />
      {/* <footer>FOOTER</footer> */}
    </div>
  );
};
