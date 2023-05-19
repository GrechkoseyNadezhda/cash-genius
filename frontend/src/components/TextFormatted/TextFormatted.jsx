import DOMPurify from "dompurify";
import "../../stylesheet/contentStyles.css";
// import css from "./TextFormatted.module.css";

export const TextFormatted = ({ content }) => {
  return (
    <div
      //   className={css.content}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    ></div>
  );
};
