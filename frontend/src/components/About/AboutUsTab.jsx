import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../redux/selectors";
import { Loader } from "../../components/Loader/Loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { team, teamUkr } from "./teamMembers.js";
import css from "./About.module.css";
import iconClu from "../../images/partners/Kharkiv-It-Cluster-logo.svg";
import iconGoIt from "../../images/partners/GoIt-logo.svg";
import iconAlevel from "../../images/partners/A-level-logo.svg";
import iconOlearis from "../../images/partners/olearis.svg";
import icons from "../../images/symbol-defs.svg";

export const AboutUsTab = () => {
  const { t } = useTranslation(["about"]);
  const { lang, error, pending } = useSelector(selectGlobal);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className={css.container}>
      {pending && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className={css.teamTitle}> {t("title1")}</h2>
      <p className={css.teamText}> {t("text")}</p>
      <h2 className={css.teamTitle}> {t("title2")}</h2>

      <ul className={css.team}>
        {lang === "en" &&
          team.map(({ name, role, src, id, ln }) => {
            return (
              <li key={id} className={css.teamInfo}>
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={src.m}
                    width="116"
                  />
                  <source
                    media="(min-width: 768px) and (max-width: 1439px)"
                    srcSet={src.p}
                    width="173"
                  />
                  <source
                    media="(min-width: 1440px)"
                    srcSet={src.d}
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
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={src.m}
                    width="116"
                  />
                  <source
                    media="(min-width: 768px) and (max-width: 1439px)"
                    srcSet={src.p}
                    width="173"
                  />
                  <source
                    media="(min-width: 1440px)"
                    srcSet={src.d}
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
          <img src={iconGoIt} alt="iconGoIt" width="156" height="71" />
        </li>
        <li className={css.logo}>
          <img src={iconAlevel} alt="iconGoIt" width="156" height="71" />
        </li>
        <li className={css.logo}>
          <img src={iconOlearis} alt="iconGoIt" width="156" height="71" />
        </li>
      </ul>
    </div>
  );
};
