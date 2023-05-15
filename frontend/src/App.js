import { Routes, Route } from "react-router-dom";
import { AboutUsTab } from "./components/About/AboutUsTab";
import { ArticlesTab } from "./components/ArticlesTab/ArticlesTab.jsx";
import { GameTab } from "./components/GameTab";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404/Page404";
import { ArticleDetails } from "./components/ArticleDetails/ArticleDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<GameTab />} />
        <Route path="articles" element={<ArticlesTab />} />
        <Route path="about" element={<AboutUsTab />} />
        <Route
          path="/articles/:category/:articleId"
          element={<ArticleDetails />}
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
export default App;
