import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Loader } from "../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectGlobal } from "../redux/selectors";
import { Suspense } from "react";

export const Home = () => {
  // const { pending } = useSelector(selectGlobal);
  return (
    <>
      <Header />
      {/* {pending && <Loader />} */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
