import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen pt-14">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
