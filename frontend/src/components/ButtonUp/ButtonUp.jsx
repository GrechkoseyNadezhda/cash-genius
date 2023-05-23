import css from "./ButtonUp.module.css";
import icons from "../../images/symbol-defs.svg";
export const ButtonUp = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container">
      <button className={css.buttonUp} onClick={scrollUp}>
        <svg className={css.iconUp}>
          <use href={`${icons}#button-up`}></use>
        </svg>
      </button>
    </div>
  );
};
