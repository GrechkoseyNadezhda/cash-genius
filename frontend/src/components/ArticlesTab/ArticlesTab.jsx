import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/selectors";
import { Categories } from "../Categories/Categories";
import { ArticlesList } from "../ArticlesList/ArticlesList";
import css from "./ArticlesTab.module.css";
import { setCurrentPage } from "../../redux/categorySlice";

export const ArticlesTab = () => {
  const { t } = useTranslation(["articles"]);
  const { categorySelected } = useSelector(selectCategory);
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();

  const updateArticles = (newArticles) => {
    setArticles((articles) => [...articles, ...newArticles]);
  };

  const resetArticles = (newArticles) => {
    setArticles(newArticles);
    dispatch(setCurrentPage(1));
  };

  return (
    <section className={css.articlesTabSection}>
      <div className="container">
        <h1 className={css.title}>{t("title")}</h1>
        <div className={css.finPageWrapper}>
          <Categories loadArticles={resetArticles} />
          {articles.length > 0 && (
            <ArticlesList
              artList={articles}
              category={categorySelected}
              loadArticles={updateArticles}
            />
          )}
        </div>
      </div>
    </section>
  );
};
