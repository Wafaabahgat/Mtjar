import { AiOutlineSearch } from "react-icons/ai";
import Avatar from "../Ui/Avatar";
import Input from "../Ui/Input";

const DashNavbar = () => {
  return (
    <>
      <div className="border-l border-slate-300 w-full z-10 shadow-md bg-white h-[80px]">
        <div className="max-h-[80px] m-auto flex gap-6 p-4 items-center">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Search..."
              className="py-3 text-md"
              previcon={
                <AiOutlineSearch className="text-slate-800 cursor-pointer text-2xl" />
              }
            />
          </div>
          <Avatar />
        </div>
      </div>
    </>
  );
};

export default DashNavbar;
