import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/NavBar/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shared = () => {
  const location = useLocation();
  const { pathname } = location;
  const routesToHideHeaderFooter = ["/login", "/signup", "/clientDashbord", "/retailerDashboard", "/adminDashboard"];
  const shouldHideHeaderFooter = routesToHideHeaderFooter.includes(pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <ToastContainer />
      <Outlet />
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

export default Shared;
