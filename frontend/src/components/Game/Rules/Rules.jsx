import { useTranslation } from "react-i18next";

import css from "./Rules.module.css";
import { useState } from "react";

import { LongRules } from "../ShortAndLongRules/LongRules";
import { ShortRules } from "../ShortAndLongRules/ShortRules";

export const Rules = () => {
  const [isOpenRules, setIsOpenRules] = useState(false);

  const { t } = useTranslation(["game"]);

  const handleClick = () => {
    setIsOpenRules(true);
  };

  return (
    <section className={css.rules}>
      <div className="container">
        <h2 className={css.title}>{t("rules.title")}</h2>

        {isOpenRules ? (
          <LongRules />
        ) : (
          <ShortRules handleClick={handleClick}></ShortRules>
        )}
      </div>
    </section>
  );
};
