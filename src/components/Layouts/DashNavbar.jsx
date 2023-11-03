import Avatar from "../Ui/Avatar";
import Search from "../Ui/Search";

const DashNavbar = () => {
  return (
    <>
      <div className="border-l border-slate-300 w-full z-10 shadow-md bg-white h-[80px]">
        <div className="max-h-[80px] m-auto flex gap-6 p-4 items-center">
          <Search/>
          <Avatar />
        </div>
      </div>
    </>
  );
};

export default DashNavbar;
