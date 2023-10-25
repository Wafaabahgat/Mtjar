import { Link } from "react-router-dom";
import DashboardContainer from "../../../components/Ui/DashboardContainer";

const links = [
  {
    name: "products",
  },
];
const Products = () => {
  return (
    <DashboardContainer
      ttl="Products"
      links={links}
      name="Create new Products"
      className="py-2"
    >
      <Link
        className="bg-green-500 flex justify-center text-slate-50 w-[1100px] text-lg py-2 text-center rounded-md hover:opacity-80 active:scale-90"
        to="/dashboard/products/create"
      >
        Create New Products
      </Link>
      <div className="mt-10 overflow-auto ">
        <table className=" w-full ">
          <thead>
            <tr>
              <th>#id</th>
              <th>name</th>
              <th>disc</th>
              <th>price</th>
              <th>compare_price</th>
              <th>store</th>
              <th>category</th>
              <th>rating</th>
              <th>type</th>
              <th>status</th>
              <th>actions</th>
            </tr>
          </thead>
        </table>
      </div>
    </DashboardContainer>
  );
};

export default Products;
