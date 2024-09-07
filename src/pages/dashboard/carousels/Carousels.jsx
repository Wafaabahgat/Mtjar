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
      <div className="lg:w-[1000px] md:w-[750px] sm:w-[500px] w-[300px] px-4 ">
        <Link
          className="flex justify-center py-2 text-center bg-green-500 rounded-md text-slate-50 lg:text-lg md:text-xl hover:opacity-80 active:scale-90"
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
                  <td>{e.image_url}</td>
                  <td>
                    <div className="flex items-center justify-center gap-2 text-xl">
                      <Link to={`/dashboard/carousels/update/${e.id}`}>
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
              ))}
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

export default Carousels;
