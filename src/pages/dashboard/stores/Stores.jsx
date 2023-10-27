import { Link } from "react-router-dom";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import useGet from "../../../hooks/useGet";
import { deleteStore, stores } from "../../../slice/store/storeAction";
import Loader from "../../../components/Loader";
import { clearErrors } from "../../../slice/categories/categoriesAction";
import useDelete from "../../../hooks/useDelete";

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
      <Link
        className="bg-green-500 flex justify-center text-slate-50 w-[1100px] text-lg py-2 text-center rounded-md hover:opacity-80 active:scale-90"
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
                          <BiEditAlt className="active:scale-95 cursor-pointer text-green-700" />
                        </Link>
                        <AiOutlineDelete
                          className="active:scale-95 cursor-pointer text-red-800"
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
    </DashboardContainer>
  );
};

export default Stores;
