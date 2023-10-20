import DashboardContainer from "../../../components/Ui/DashboardContainer";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <DashboardContainer
      ttl="Categories"
      name="Create new Categories"
      className="py-2"
    >
      <Link
        className="bg-green-500 flex justify-center text-slate-50 w-[1100px] text-lg py-2 text-center rounded-md hover:opacity-80 active:scale-90"
        to="/dashboard/categories/create"
      >
        Create New Category
      </Link>
      <div className="mt-10 overflow-auto ">
        <table className="border border-slate-300 w-full ">
          <thead>
            <tr className="flex justify-between p-2">
              <th>#id</th>
              <th>name</th>
              <th>slug</th>
              <th>disc</th>
              <th>status</th>
              <th>actions</th>
            </tr>
          </thead>
        </table>
      </div>
    </DashboardContainer>
  );
};

export default Categories;
