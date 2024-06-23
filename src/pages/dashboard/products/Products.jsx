import { Link } from "react-router-dom";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import Pagination from "../../../components/Ui/Pagination";
import useGet from "../../../hooks/useGet";
import Loader from "../../../components/Loader";
import {
  clearErrors,
  deleteProducts,
  products,
} from "../../../slice/products/productsAction";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import useDelete from "../../../hooks/useDelete";

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

  const { loading: DeleteDl, handleDelete } = useDelete({
    states: "deleteProducts",
    delFun: deleteProducts,
    recalFun: products,
    clearFun: clearErrors(),
  });

  if (loading || DeleteDl) {
    return <Loader />;
  }
  
  return (
    <DashboardContainer
      ttl="Products"
      links={links}
      name="Create new Products"
      className="py-2"
    >
      <div className="lg:w-[1000px] md:w-[750px] sm:w-[500px] w-[300px] px-4 ">
        <Link
          className="flex justify-center py-2 text-center bg-green-500 rounded-md text-slate-50 lg:text-lg md:text-xl hover:opacity-80 active:scale-90"
          to="/dashboard/products/create"
        >
          Create New Products
        </Link>
        <div className="mt-10 overflow-auto ">
          <table className="w-full ">
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
                      <td>{e.disc}</td>
                      <td>{e.price}</td>
                      <td>{e.compare_price}</td>
                      <td>{e.store_id}</td>
                      <td>{e.category_id}</td>
                      <td>{e.rating}</td>
                      <td>{e.type}</td>
                      <td>{e.status}</td>
                      <td>
                        <div className="flex items-center justify-center gap-2 text-xl">
                          <Link to={`/dashboard/products/update/${e.id}`}>
                            <AiFillEdit className="text-green-700 cursor-pointer active:scale-95" />
                          </Link>
                          <AiOutlineDelete
                            className="text-red-800 cursor-pointer active:scale-95"
                            onClick={() => {
                              handleDelete(e.id);
                            }}
                          />
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
      </div>
    </DashboardContainer>
  );
};

export default Products;
