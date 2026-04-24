import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
function MainLayout() {
  return (
    <>
      <Header />

      <div className="hidden md:block">
        <SubHeader />
      </div>
      <div className="md:w-full md:bg-[#ebebeb]">
        <div className="md:max-w-7xl md:mx-60 md:py-8 md:bg-white md:px-3">
          <Outlet />
        </div>
      </div>

      <footer>Footer</footer>
    </>
  );
}

export default MainLayout;
