import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
