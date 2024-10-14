import { Link } from "react-router-dom";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
// import { BiEditAlt } from "react-icons/bi";
import useGet from "../../../hooks/useGet";
import { deleteStore, stores } from "../../../slice/store/storeAction";
import Loader from "../../../components/Loader";
import { clearErrors } from "../../../slice/categories/categoriesAction";
import useDelete from "../../../hooks/useDelete";
import Pagination from "../../../components/Ui/Pagination";

const links = [
  {
    name: "store",
  },
];

const Stores = () => {
  const { data, loading } = useGet({
    states: "stores",
    allData: stores,
  });

  const { loading: DeleteDl, handleDelete } = useDelete({
    states: "deleteStore",
    delFun: deleteStore,
    recalFun: stores,
    clearFun: clearErrors(),
  });

  if (loading || DeleteDl) {
    return <Loader />;
  }

  return (
    <DashboardContainer
      ttl="Stores"
      links={links}
      name="Create new Stores"
      className="py-2"
    >
      <div className="lg:w-[1000px] md:w-[750px] sm:w-[500px] w-[300px] px-4">
        <Link
          className="flex justify-center py-2 text-center bg-main rounded-md text-slate-50 lg:text-lg md:text-xl hover:opacity-80 active:scale-90"
          to="/dashboard/stores/create"
        >
          Create New Store
        </Link>
        <div className="mt-10 overflow-auto ">
          <table>
            <thead>
              <tr>
                <th>#id</th>
                <th>name</th>
                <th>slug</th>
                <th>disc</th>
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
                      <td>{e.status}</td>
                      <td>
                        <div className="flex items-center justify-center gap-2 text-xl">
                          <Link to={`/dashboard/stores/update/${e.id}`}>
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

export default Stores;
