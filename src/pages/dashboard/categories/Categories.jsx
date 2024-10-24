import DashboardContainer from "../../../components/Ui/DashboardContainer";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Ui/Pagination";
import useGet from "../../../hooks/useGet";
import {
  categories,
  clearErrors,
  deleteCategory,
} from "../../../slice/categories/categoriesAction";
import Loader from "../../../components/Loader";
import useDelete from "../../../hooks/useDelete";

const links = [
  {
    name: "categories",
  },
];

const Categories = () => {
  const { loading: DeleteDl, handleDelete } = useDelete({
    states: "deleteCategory",
    delFun: deleteCategory,
    recalFun: categories,
    clearFun: clearErrors(),
  });

  const { data, loading } = useGet({
    states: "categories",
    allData: categories,
  });

  if (loading || DeleteDl) {
    return <Loader />;
  }
  return (
    <DashboardContainer
      ttl="Categories"
      links={links}
      name="Create new Categories"
      className="py-2"
    >
      <div className="lg:w-[1000px] md:w-[750px] sm:w-[500px] w-[300px] px-4 ">
        <Link
          className="flex justify-center py-2 text-center bg-main rounded-md text-slate-50 lg:text-lg md:text-xl hover:opacity-80 active:scale-90"
          to="/dashboard/categories/create"
        >
          Create New Category
        </Link>
        <div className="mt-10 overflow-auto ">
          <table>
            <thead>
              <tr>
                <th>#id</th>
                <th>name</th>
                <th>slug</th>
                <th>disc</th>
                <th>parent</th>
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
                          <Link to={`/dashboard/categories/update/${e.id}`}>
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

export default Categories;
