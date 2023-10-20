import { AiFillDashboard } from "react-icons/ai";
import { IoMdAppstore } from "react-icons/io";
import { BiSolidStoreAlt } from "react-icons/bi";
import { FaShapes } from "react-icons/fa";

const data = [
  {
    ttl: "Dashboard",
    link: "/dashboard",
    icon: <AiFillDashboard />,
  },
  {
    ttl: "Products",
    link: "products",
    icon: <IoMdAppstore />,
  },
  {
    ttl: "Categories",
    link: "categories",
    icon: <FaShapes />,
  },
  {
    ttl: "Stores",
    link: "stores",
    icon: <BiSolidStoreAlt />,
  },
];
export default data;
