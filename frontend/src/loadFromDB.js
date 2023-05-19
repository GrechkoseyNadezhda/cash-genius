import { setMorePages } from "./redux/categorySlice";
import { setEmptyResult, setError, setPending } from "./redux/globalSlice";

export const loadFromDB = (
  promiseFromDB,
  category,
  setState,
  fields,
  dispatch,
  params = { page: 1, num_articles: 100 }
) => {
  const loadData = () => {
    dispatch(setPending(true));
    dispatch(setError(false));
    promiseFromDB(category, params)
      .then((res) => {
        const nextPageExists = res.data.next_page_exists;
        if (typeof nextPageExists !== "undefined")
          dispatch(setMorePages(nextPageExists));
        for (let field of fields) res = res[field];
        if (res) {
          setState(res);
          dispatch(setEmptyResult(""));
        }
      })
      .catch((err) => {
        if (err.code !== "ERR_BAD_REQUEST") dispatch(setError(err.message));
        else dispatch(setEmptyResult("No such an article(s)"));
      })
      .finally(() => dispatch(setPending(false)));
  };
  return loadData;
};
