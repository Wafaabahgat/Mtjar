import DashboardContainer from "../../../components/Ui/DashboardContainer";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Ui/Pagination";
import useGet from "../../../hooks/useGet";
import {
  carousels,
  clearErrors,
  deleteCarousels,
} from "../../../slice/carousels/CarouselsAction";
import Loader from "../../../components/Loader";
import useDelete from "../../../hooks/useDelete";

const links = [
  {
    name: "Carousels",
  },
];

const Carousels = () => {
  const { data, loading } = useGet({
    states: "carousels",
    allData: carousels,
  });
  const { loading: DeleteDl, handleDelete } = useDelete({
    states: "deleteCarousels",
    delFun: deleteCarousels,
    recalFun: carousels,
    clearFun: clearErrors(),
  });

  if (loading || DeleteDl) {
    return <Loader />;
  }
  return (
    <DashboardContainer
      ttl="Carousels"
      links={links}
      name="Create new Carousels"
      className="py-2"
    >
      <Link
        className="bg-green-500 flex justify-center text-slate-50 w-[1100px] text-lg py-2 text-center rounded-md hover:opacity-80 active:scale-90"
        to="/dashboard/carousels/create"
      >
        Create New Carousels
      </Link>
      <div className="mt-10 overflow-auto ">
        <table>
          <thead>
            <tr>
              <th>#id</th>
              <th>image</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.image}</td>
                <td>
                  <div className="flex items-center justify-center gap-2 text-xl">
                    <Link to={`/dashboard/carousels/update/${e.id}`}>
                      <AiFillEdit className="active:scale-95 cursor-pointer text-green-700" />
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
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <Pagination data={data} />
      </div>
    </DashboardContainer>
  );
};

export default Carousels;