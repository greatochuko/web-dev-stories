import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="pt-14">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
