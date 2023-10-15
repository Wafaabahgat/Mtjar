import { FaBoxes, FaShoppingBag, FaUserAlt, FaHome } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { BiBook } from "react-icons/bi";
export const userCartLinks = [
  {
    ttl: "dashboard",
    link: "/dashboard",
    icon: <AiFillDashboard />,
  },
  {
    ttl: "home",
    link: "/",
    icon: <FaHome />,
  },
  {
    ttl: "profile",
    link: "/profile",
    icon: <FaUserAlt />,
  },
  {
    ttl: "products",
    link: "/products",
    icon: <FaBoxes />,
  },
  {
    ttl: "cart",
    link: "/cart",
    icon: <FaShoppingBag />,
  },
];
export const headerLinks = [
  {
    ttl: "home",
    link: "/",
    icon: <FaHome />,
  },
  {
    ttl: "products",
    link: "/products",
    icon: <FaBoxes />,
  },
  {
    ttl: "contact",
    link: "/contact",
    icon: <IoMdContact />,
  },
  {
    ttl: "blog",
    link: "/blog",
    icon: <BiBook />,
  },
];
