import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getAboutInfo } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";
import { loadFromDB } from "../loadFromDB";

export const AboutUsTab = () => {
  const [aboutInfo, setAboutInfo] = useState("");
  const { t } = useTranslation(["about"]);
  const { lang, error, pending } = useSelector(selectGlobal);
  const dispatch = useDispatch();
  const loader = useMemo(
    () => loadFromDB(getAboutInfo, setAboutInfo, ["statusText"], dispatch),
    [dispatch]
  );
  useEffect(() => loader(), [loader]);

  return (
    <div>
      <p> {t("title")}</p>
      <p>{error}</p>
      {pending && <p>Loading data...</p>}
      <p>Data from server: {aboutInfo}</p>
      <p>Language: {lang}</p>
    </div>
  );
};
