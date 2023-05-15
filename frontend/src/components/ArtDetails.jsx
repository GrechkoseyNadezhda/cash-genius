import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { loadFromDB } from "../loadFromDB";
import { getArticleById } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";

import { Loader } from "../components/Loader/Loader";

export const ArtDetails = () => {
  const [artContent, setArtContent] = useState({});
  const { articleId } = useParams();
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { error, pending, lang } = useSelector(selectGlobal);

  const loader = useMemo(
    () =>
      loadFromDB(getArticleById, setArtContent, ["data"], dispatch, articleId),
    [articleId, dispatch]
  );

  useEffect(() => loader(), [loader, articleId]);

  return (
    <div>
      <p>{error}</p>
      {/* {pending && <p>Loading data...</p>} */}
      {pending && <Loader />}
      <p>Language: {lang}</p>
      <h1>{artContent.title}</h1>
      <h3>{artContent.author}</h3>
      <p>{artContent.content}</p>
      <Link to={location.state.from}>{t("article.back")}</Link>
    </div>
  );
};
