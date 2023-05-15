import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectCategory, selectGlobal } from "../../redux/selectors";
import { Categories } from "../Categories/Categories";
import { ArticlesList } from "../ArticlesList/ArticlesList";
import css from "./ArticlesTab.module.css";

import { Loader } from "../../components/Loader/Loader";

export const ArticlesTab = () => {
  const { t } = useTranslation(["articles"]);
  const { error, pending } = useSelector(selectGlobal);
  const { categorySelected } = useSelector(selectCategory);
  const [articles, setArticles] = useState([]);

  const updateArticles = (newArticles) => {
    setArticles((articles) => [...articles, ...newArticles]);
    // console.log([...articles, ...newArticles]);
    // setArticles(newArticles);
  };

  return (
    <div className="container">
      <p>{error}</p>
      {pending && <Loader />}
      <h1 className={css.title}>{t("title")}</h1>
      <div className={css.finPageWrapper}>
        <Categories loadArticles={updateArticles} />
        {articles.length > 0 && (
          <ArticlesList
            artList={articles}
            category={categorySelected}
            loadArticles={updateArticles}
          />
        )}
      </div>
    </div>
  );
};
