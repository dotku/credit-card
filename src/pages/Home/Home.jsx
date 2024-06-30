import { Card, CardHeader } from "@fluentui/react-components";
import Testmonials from "../../components/testmonials";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />

      <img src="/poster.webp" width="100%" />
      <Outlet />
      <Testmonials />
    </div>
  );
}
