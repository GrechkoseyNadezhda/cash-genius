import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getAboutInfo } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";
import { loadFromDB } from "../loadFromDB";

import { team, teamUkr } from "./teamMembers";
import css from "./About.module.css";
import iconClu from "../images/clu.svg";
import iconGoIt from "../images/goit.svg";
import iconAlevel from "../images/alevel.svg";
import iconOlearis from "../images/olearis.svg";
import icons from "../images/symbol-defs.svg";

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
    <div className={"container"}>
      <h2 className={css.teamTitle}> {t("about.title1")}</h2>
      <p className={css.teamText}> {t("about.text")}</p>
      <h2 className={css.teamTitle}> {t("about.title2")}</h2>

      <ul className={css.team}>
        {lang === "en" &&
          team.map(({ name, role, src, id, ln }) => {
            return (
              <li key={id}>
                <div className={css.teamInfo}>
                  <img src={src} alt={name} width="116" />

                  <p className={css.teamName}>{name}</p>
                  <p className={css.teamRole}>{role}</p>
                  <a
                    href={ln}
                    className={css.teamLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className={css.teamIcon} width="24" height="24">
                      {/* <use href={iconLn} /> */}
                      <use href={`${icons}#icon-linkedin`} />
                    </svg>
                  </a>
                </div>
              </li>
            );
          })}

        {lang === "ua" &&
          teamUkr.map(({ name, role, src, id, ln }) => {
            return (
              <li key={id}>
                <div className={css.teamInfo}>
                  <img src={src} alt={name} width="116" />
                  <p className={css.teamName}>{name}</p>
                  <p className={css.teamRole}>{role}</p>
                  <a
                    href={ln}
                    className={css.teamLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className={css.teamIcon} width="24" height="24">
                      {/* <use href={iconLn} /> */}
                      <use href={`${icons}#icon-linkedin`} />
                    </svg>
                  </a>
                </div>
              </li>
            );
          })}
      </ul>
      <h2 className={css.teamTitle}> {t("about.title3")}</h2>
      <div className={css.partners}>
        <img
          className={css.logo}
          src={iconClu}
          alt="iconClu"
          width="156"
          height="71"
        />
        <img
          className={css.logo}
          src={iconGoIt}
          alt="iconGoIt"
          width="156"
          height="71"
        />
        <img
          className={css.logo}
          src={iconAlevel}
          alt="iconGoIt"
          width="156"
          height="71"
        />
        <img
          className={css.logo}
          src={iconOlearis}
          alt="iconGoIt"
          width="156"
          height="71"
        />
      </div>
      {/* <p>{error}</p>

      {pending && <p>Loading data...</p>}
      <p>Data from server: {aboutInfo}</p>
      <p>Language: {lang}</p> */}
    </div>
  );
};
