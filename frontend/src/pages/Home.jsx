import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
};
