import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../../redux/operations";
import { selectGlobal } from "../../redux/selectors";
import { loadFromDB } from "../../loadFromDB";
import { Categories } from "../Categories/Categories";
import { ArticlesList } from "../ArticlesList/ArticlesList";
import css from "./ArticlesTab.module.css";

export const ArticlesTab = () => {
  const { t } = useTranslation(["articles"]);
  const { error, pending } = useSelector(selectGlobal);
  const [articles, setArticles] = useState([]);
  // const [showCategories, setShowcategories] = useState(true);
  // const [page, setPage] = useState(1);
  // const dispatch = useDispatch();
  // const loader = useMemo(() => {
  //   return loadFromDB(
  //     getAllArticles,
  //     "financial_guide",
  //     setArticles,
  //     ["data"],
  //     dispatch
  //   );
  // }, [dispatch]);

  // useEffect(() => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth < 768) return;
  //   console.log("statr");
  //   loader();
  // }, [loader]);

  const updateArticles = (newArticles) => {
    setArticles(newArticles);
  };
  // const updateShowCategories = (toggle) => {
  //   setShowcategories(toggle);
  // };

  return (
    <div className="container">
      <p>{error}</p>
      {pending && <p>Loading data...</p>}
      <h1 className={css.title}>{t("title")}</h1>
      <div className={css.finPageWrapper}>
        {/* {showCategories && ( */}
        <Categories
          loadArticles={updateArticles}
          // showCategories={updateShowCategories}
        />
        {/* )} */}
        {articles.length > 0 && <ArticlesList artList={articles} />}

        {/* <p>Language: {lang}</p> */}
        {/* {articles?.length > 0 && <></>} */}
      </div>
    </div>
  );
};
