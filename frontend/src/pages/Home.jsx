import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Loader } from "../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectGlobal } from "../redux/selectors";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export const Home = () => {
  const { error, pending } = useSelector(selectGlobal);
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {pending && <Loader />}
      <Outlet />
      <Footer />
    </>
  );
};
