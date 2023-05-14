import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../redux/selectors";
import { Categories } from "../Categories/Categories";
import { ArticlesList } from "../ArticlesList/ArticlesList";
import css from "./ArticlesTab.module.css";

import { Loader } from "../../components/Loader/Loader";

export const ArticlesTab = () => {
  const { t } = useTranslation(["articles"]);
  const { error, pending } = useSelector(selectGlobal);
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState(null);

  const updateArticles = (newArticles) => {
    setArticles(newArticles);
  };
  const updateCategory = (category) => {
    setCategory(category);
  };

  return (
    <div className="container">
      <p>{error}</p>
      {/* {pending && <p>Loading data...</p>} */}
      {pending && <Loader />}
      <h1 className={css.title}>{t("title")}</h1>
      <div className={css.finPageWrapper}>
        <Categories
          loadArticles={updateArticles}
          loadCategory={updateCategory}
        />
        {articles.length > 0 && (
          <ArticlesList artList={articles} category={category} />
        )}
      </div>
    </div>
  );
};
