import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../../redux/operations";
import { selectGlobal } from "../../redux/selectors";
import { loadFromDB } from "../../loadFromDB";
import { Article } from "../Article";

export const ArticlesTab = () => {
  const { t } = useTranslation(["articles"]);
  const { lang, error, pending } = useSelector(selectGlobal);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const loader = useMemo(() => {
    return loadFromDB(getAllArticles, setArticles, ["data"], dispatch, page);
  }, [dispatch, page]);

  useEffect(() => {
    return loader();
  }, [loader, page]);

  return (
    <div>
      {t("title")}
      {/* <p>{error}</p> */}
      {pending && <p>Loading data...</p>}
      {/* <Categories />
      <Article /> */}

      {/* <p>Language: {lang}</p> */}
      {/* {articles?.length > 0 && <></>} */}
    </div>
  );
};
