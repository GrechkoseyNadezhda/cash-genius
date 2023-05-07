import { Routes, Route } from "react-router-dom";
import { AboutUsTab } from "./components/AboutUsTab";
import { ArticlesTab } from "./components/ArticlesTab";
import { GameTab } from "./components/GameTab";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { ArtDetails } from "./components/ArtDetails";
import { Suspense } from "react";

export const App = () => {
  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<GameTab />} />
          <Route path="articles" element={<ArticlesTab />} />
          <Route path="about" element={<AboutUsTab />} />
          <Route path="/articles/:articleId" element={<ArtDetails />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};
export default App;
