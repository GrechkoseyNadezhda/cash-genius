import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../redux/selectors";

import { Loader } from "../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useTranslation } from "react-i18next";
import css from "./Page404.module.css";
import icon404 from "../../images/partners/404.svg";

export const Page404 = () => {
  const { t } = useTranslation(["page404"]);

  const { error, pending } = useSelector(selectGlobal);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className={css.container}>
      {pending && <Loader />}
      <h1 className={css.title}>Cash Genius</h1>
      <p className={css.text}>{t("text1")}</p>
      <p className={css.text}> {t("text2")}</p>
      <img className={css.number} src={icon404} alt="icon404" />

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
