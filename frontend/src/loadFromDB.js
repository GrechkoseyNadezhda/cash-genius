import { setError, setPending } from "./redux/globalSlice";

export const loadFromDB = (
  promiseFromDB,
  setState,
  fields,
  dispatch,
  param = ""
) => {
  const loadData = () => {
    dispatch(setPending(true));
    dispatch(setError(null));
    promiseFromDB(param)
      .then((res) => {
        let result = res;
        for (let field of fields) result = result[field];
        setState(result);
      })
      .catch((err) => dispatch(setError(err.message)))
      .finally(() => dispatch(setPending(false)));
  };
  return loadData;
};
