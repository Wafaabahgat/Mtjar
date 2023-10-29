import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Forgetpass from "./pages/Auth/Forgetpass";
import Resetpass from "./pages/Auth/Resetpass";
import AuthUser from "./middleware/AuthUser";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Stores from "./pages/dashboard/stores/Stores";
import Categories from "./pages/dashboard/categories/Categories";
import CreateStore from "./pages/dashboard/stores/createStore";
import Products from "./pages/dashboard/products/Products";
import CreateProduct from "./pages/dashboard/products/CreateProduct";
import UpdateStore from "./pages/dashboard/stores/UpdateStore";
import CreateCategory from "./pages/dashboard/categories/CreateCategory";
import UpdateCategory from "./pages/dashboard/categories/UpdateCategory";
import AdminUser from "./middleware/AdminUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      ////////////////// Auth //////////////////
      {
        path: "/login",
        element: (
          <AuthUser>
            <Login />
          </AuthUser>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthUser>
            <Signup />
          </AuthUser>
        ),
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/forgetpass",
        element: (
          <AuthUser>
            <Forgetpass />
          </AuthUser>
        ),
      },
      {
        path: "/Resetpass",
        element: (
          <AuthUser>
            <Resetpass />
          </AuthUser>
        ),
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      //////Dashboard//////
      {
        path: "/dashboard",
        element: (
          <AdminUser>
            <Dashboard />
          </AdminUser>
        ),
        children: [
          //stores
          {
            path: "stores",
            element: <Stores />,
          },
          {
            path: "stores/create",
            element: <CreateStore />,
          },
          {
            path: "stores/update/:id",
            element: <UpdateStore />,
          },

          // Products
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "products/create",
            element: <CreateProduct />,
          },

          //Categories
          {
            path: "categories",
            element: <Categories />,
          },
          {
            path: "categories/create",
            element: <CreateCategory />,
          },
          {
            path: "categories/update/:id",
            element: <UpdateCategory />,
          },
        ],
      },
    ],
  },
]);
export default router;
