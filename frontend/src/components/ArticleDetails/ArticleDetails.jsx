import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { loadFromDB } from "../../loadFromDB";
import { getArticleById } from "../../redux/operations";
import { selectGlobal } from "../../redux/selectors";

export const ArticleDetails = () => {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();
  const { category } = useParams();
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { error, pending, lang } = useSelector(selectGlobal);

  //   const loader = useMemo(
  //     () =>
  //       loadFromDB(getArticleById, setArtContent, ["data"], dispatch, articleId),
  //     [articleId, dispatch]
  //     );
  const loader = () => {
    const loady = loadFromDB(
      getArticleById,
      articleId,
      setArticle,
      ["data"],
      dispatch
    );
    loady();
  };

  useEffect(() => {
    loader();
  }, []);

  console.log(category);

  return (
    <div>
      <p>{error}</p>
      {pending && <p>Loading data...</p>}

      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <Link to={location.state.from}>{t("article.back")}</Link>
    </div>
  );
};
