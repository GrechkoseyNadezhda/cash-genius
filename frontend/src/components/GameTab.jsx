import { useEffect, useMemo, useState } from "react";
// import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getMainInfo } from "../redux/operations";
// import { selectGlobal } from "../redux/selectors";
import { loadFromDB } from "../loadFromDB";
import { Game } from "./Game/Game";

export const GameTab = () => {
  const [mainInfo, setMainInfo] = useState("");
  // const { error, lang, pending } = useSelector(selectGlobal);
  // const { t } = useTranslation(["game"]);
  const dispatch = useDispatch();
  const loader = useMemo(
    () => loadFromDB(getMainInfo, setMainInfo, ["statusText"], dispatch),
    [dispatch]
  );
  useEffect(() => loader(), [loader]);
  return (
    <>
      {/* <div className="container">
        <p>{t("title")}</p>
        <p>{error}</p>
        {pending && <p>Loading data...</p>}
        <p>Data from server: {mainInfo}</p>
        <p>
          {t("language")}: {lang}
        </p>
      </div> */}

      <Game />
    </>
  );
};
