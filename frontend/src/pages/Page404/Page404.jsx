import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAboutInfo } from "../../redux/operations";
import { selectGlobal } from "../../redux/selectors";
import { loadFromDB } from "../../loadFromDB";

import { Loader } from "../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Cash Genius</h1>
      <p className={css.text}>{t("text1")}</p>
      <p className={css.text}> {t("text2")}</p>
      <img className={css.number} src={icon404} alt="icon404" />
      <Loader />

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
    </div>
  );
};
