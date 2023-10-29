import Cookies from "universal-cookie";

const cookies = new Cookies();

const AdminUser = ({ children }) => {
  const user = cookies.get("user");
  if (!user) {
    return (window.location.href = "/login");
  }
  if (user && user?.role !== "admin" && user?.role !== "super-admin") {
    return (window.location.href = "/");
  }
  return children;
};

export default AdminUser;
