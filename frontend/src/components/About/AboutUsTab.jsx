import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getAboutInfo } from "../../redux/operations";
import { selectGlobal } from "../../redux/selectors";
import { loadFromDB } from "../../loadFromDB";

import { team, teamUkr } from "./teamMembers.js";
import css from "./About.module.css";
import iconClu from "../../images/partners/Kharkiv-It-Cluster-logo.svg";
import iconGoIt from "../../images/partners/GoIt-logo.svg";
import iconAlevel from "../../images/partners/A-level-logo.svg";
import iconOlearis from "../../images/partners/olearis.svg";
import icons from "../../images/symbol-defs.svg";

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
    <div className={css.container}>
      <h2 className={css.teamTitle}> {t("title1")}</h2>
      <p className={css.teamText}> {t("text")}</p>
      <h2 className={css.teamTitle}> {t("title2")}</h2>

      <ul className={css.team}>
        {lang === "en" &&
          team.map(({ name, role, src, id, ln }) => {
            return (
              <li key={id} className={css.teamInfo}>
                {/* <div className={css.teamInfo}> */}
                {/* <img src={src} alt={name} width="116" /> */}
                {/* <img
                  srcset="
                  ./img/1photomob1x.jpg  116w,
                  ./img/1phototab1x.jpg  173w,
                  ./img/1photodesk1x.jpg 312w,
                "
                  sizes="(min-width:1440px) 312px, (min-width:768px) 173px, (min-width:480px) 116px, 100vw"
                  src={src}
                  alt={name}
                /> */}
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcset={src.m}
                    width="116"
                  />
                  <source
                    media="(min-width: 768px) and (max-width: 1439px)"
                    srcset={src.p}
                    width="173"
                  />
                  <source
                    media="(min-width: 1440px)"
                    srcset={src.d}
                    width="312"
                  />
                  <img src={src.d} alt={name} />
                </picture>
                <p className={css.teamName}>{name}</p>
                <p className={css.teamRole}>{role}</p>

                <a
                  href={ln}
                  className={css.teamLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={css.teamIcon} width="24" height="24">
                    <use href={`${icons}#icon-linkedin`} />
                  </svg>
                </a>
              </li>
            );
          })}

        {lang === "ua" &&
          teamUkr.map(({ name, role, src, id, ln }) => {
            return (
              <li key={id} className={css.teamInfo}>
                {/* <div className={css.teamInfo}> */}
                {/* <img src={src} alt={name} width="116" /> */}
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcset={src.m}
                    width="116"
                  />
                  <source
                    media="(min-width: 768px) and (max-width: 1439px)"
                    srcset={src.p}
                    width="173"
                  />
                  <source
                    media="(min-width: 1440px)"
                    srcset={src.d}
                    width="312"
                  />
                  <img src={src.d} alt={name} />
                </picture>
                <p className={css.teamName}>{name}</p>
                <p className={css.teamRole}>{role}</p>
                <a
                  href={ln}
                  className={css.teamLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={css.teamIcon} width="24" height="24">
                    <use href={`${icons}#icon-linkedin`} />
                  </svg>
                </a>
              </li>
            );
          })}
      </ul>
      <h2 className={css.teamTitle}> {t("title3")}</h2>
      <ul className={css.partners}>
        <li className={css.logo}>
          <img src={iconClu} alt="iconClu" width="156" height="71" />
        </li>
        <li className={css.logo}>
          {/* <img
            srcset="
                  ./img/1photomob1x.jpg  116w,
                  ./img/1phototab1x.jpg  173w,
                  ./img/1photodesk1x.jpg 312w,
                "
            sizes="(min-width:1440px) 312px, (min-width:768px) 173px, (min-width:480px) 116px, 100vw"
            src={src}
            alt={name}
          /> */}
          <img src={iconGoIt} alt="iconGoIt" width="156" height="71" />
        </li>
        <li className={css.logo}>
          <img src={iconAlevel} alt="iconGoIt" width="156" height="71" />
        </li>
        <li className={css.logo}>
          <img src={iconOlearis} alt="iconGoIt" width="156" height="71" />
        </li>
      </ul>
      {/* <p>{error}</p>

      {pending && <p>Loading data...</p>}
      <p>Data from server: {aboutInfo}</p>
      <p>Language: {lang}</p> */}
    </div>
  );
};
