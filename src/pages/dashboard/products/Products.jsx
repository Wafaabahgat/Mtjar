import { Link } from "react-router-dom";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import Pagination from "../../../components/Ui/Pagination";
import useGet from "../../../hooks/useGet";
import Loader from "../../../components/Loader";
import { products } from "../../../slice/products/productsAction";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

const links = [
  {
    name: "products",
  },
];

const Products = () => {
  const { data, loading } = useGet({
    states: "products",
    allData: products,
  });

  if (loading) {
    return <Loader />;
  }
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
          <tbody>
            {data?.data
              ? data?.data?.map((e) => (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.slug}</td>
                    <td>{e.disc}</td>
                    <td>{e?.parent?.name ? e?.parent?.name : "Main"}</td>
                    <td>{e.status}</td>
                    <td>
                      <div className="flex items-center justify-center gap-2 text-xl">
                        <Link to={`/dashboard/products/update/${e.id}`}>
                          <AiFillEdit className="active:scale-95 cursor-pointer text-green-700" />
                        </Link>
                        <AiOutlineDelete className="active:scale-95 cursor-pointer text-red-800" />
                      </div>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <Pagination data={data} />
      </div>
    </DashboardContainer>
  );
};

export default Products;
