import { setError, setPending } from "./redux/globalSlice";

export const loadFromDB = (
  promiseFromDB,
  category,
  setState,
  fields,
  dispatch,
  param = ""
) => {
  const loadData = () => {
    // console.log(category);
    dispatch(setPending(true));
    dispatch(setError(null));
    promiseFromDB(category, param)
      .then((res) => {
        let result = res;
        for (let field of fields) result = result[field];
        setState(result);
        // console.log(res);
      })
      .catch((err) => dispatch(setError(err.message)))
      .finally(() => dispatch(setPending(false)));
  };
  return loadData;
};
