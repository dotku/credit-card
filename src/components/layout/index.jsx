import Testmonials from "../../components/testmonials";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../footer";

export default function Layout() {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
