import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/NavBar/Header";

const Shared = () => {
  const location = useLocation();
  const { pathname } = location;

  const routesToHideHeaderFooter = ["/login", "/signup"];
  const shouldHideHeaderFooter = routesToHideHeaderFooter.includes(pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <Outlet />
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

export default Shared;
