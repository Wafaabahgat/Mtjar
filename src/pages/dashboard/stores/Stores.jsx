// import { AiOutlineDelete } from "react-icons/ai";
// import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import DashboardContainer from "../../../components/Ui/DashboardContainer";

const links = [
  {
    name: "store",
  },
];
const Stores = () => {
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
          {/* <tbody>
            {data?.map((e) => {
              <tr key={e}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.slug}</td>
                <td>{e.disc}</td>
                <td>{e?.parent?.name ? e?.parent?.name : "Main"}</td>
                <td>{e.status}</td>
                <td>
                  <div className="flex items-center justify-center gap-2 text-xl">
                    <Link to={`/dashboard/categories/update/${e.id}`}>
                      <BiEditAlt className="active:scale-95 cursor-pointer text-green-700" />
                    </Link>
                    <AiOutlineDelete className="active:scale-95 cursor-pointer text-red-800" />
                  </div>
                </td>
              </tr>;
            })}
          </tbody> */}
        </table>
      </div>
    </DashboardContainer>
  );
};

export default Stores;
