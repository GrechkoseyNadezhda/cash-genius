import { useTranslation } from "react-i18next";
export const Page404 = () => {
  const { t } = useTranslation();
  return <h1>{t("page404.title")}</h1>;
};
