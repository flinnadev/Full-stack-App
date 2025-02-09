import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Outlet } from "react-router";

const BasicLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
