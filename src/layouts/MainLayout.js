import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <div>
    <Header />
    <main>
      <Outlet /> {/* This is where the page components will be rendered */}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
