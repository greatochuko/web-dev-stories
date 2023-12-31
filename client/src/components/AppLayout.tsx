import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { useEffect } from "react";

export default function AppLayout() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen pt-14">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}
