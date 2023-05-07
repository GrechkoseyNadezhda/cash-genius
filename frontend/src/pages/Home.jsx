import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/globalSlice";

const lngs = {
  en: { langName: "English" },
  ua: { langName: "Українська" },
};

export const Home = () => {
  const linkStyle = {
    paddingRight: "12px",
  };
  const { t, i18n } = useTranslation(["header"]);
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <nav>
          <Link style={linkStyle} to="/">
            {t("game")}
          </Link>
          <Link style={linkStyle} to="/articles">
            {t("articles")}
          </Link>
          <Link to="/about"> {t("about")}</Link>
        </nav>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => {
                i18n.changeLanguage(lng);
                dispatch(setLanguage(lng));
              }}
            >
              {lngs[lng].langName}
            </button>
          ))}
        </div>
      </header>
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
};
