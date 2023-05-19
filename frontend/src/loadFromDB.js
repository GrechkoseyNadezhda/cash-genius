import { setMorePages } from "./redux/categorySlice";
import { setError, setPending } from "./redux/globalSlice";

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
    dispatch(setError(null));
    promiseFromDB(category, params)
      .then((res) => {
        const nextPageExists = res.data.next_page_exists;
        if (typeof nextPageExists !== "undefined")
          dispatch(setMorePages(nextPageExists));
        for (let field of fields) res = res[field];
        if (res) setState(res);
      })
      .catch((err) => {
        if (err.code !== "ERR_BAD_REQUEST") dispatch(setError(err.message));
        console.log(err);
      })
      .finally(() => dispatch(setPending(false)));
  };
  return loadData;
};
