import { Outlet } from "react-router-dom";
import DashNavbar from "../components/Layouts/DashNavbar";
import DashSidebar from "../components/Layouts/DashSidebar";

const Dashboard = () => {
  return (
    <div className="flex-1 flex">
      <DashSidebar />
      <div className="flex-1 h-full flex flex-col">
        <DashNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
