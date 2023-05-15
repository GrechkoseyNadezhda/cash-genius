import css from "./CardExample.module.css";

export const CardExample = ({ title, text1, text2, text3 }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th} colSpan="3">
            {title}
          </th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        <tr className={css.tr}>
          <td className={css.td}>{text1}</td>
          <td className={css.td}>{text2}</td>
          <td className={css.td}>{text3}</td>
        </tr>
      </tbody>
    </table>
  );
};
