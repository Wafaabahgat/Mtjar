import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline, MdDriveFileRenameOutline } from "react-icons/md";

const SignupForm = () => {
  return (
    <>
      <div className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3 ">
        <MdDriveFileRenameOutline className="mr-3 text-gray-400" />
        <input
          placeholder="Name"
          type="name"
          name="name"
          className="outline-none bg-gray-200 "
        />
      </div>
      <div className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3">
        <FaRegEnvelope className="mr-3 text-gray-400" />
        <input
          placeholder="Email"
          type="email"
          name="email"
          className="outline-none bg-gray-200 "
        />
      </div>
      <form className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3">
        <MdLockOutline className="mr-3 text-gray-400 " />
        <input
          placeholder="New Password"
          type="password"
          name="password"
          className="outline-none bg-gray-200 "
        />
      </form>
    </>
  );
};

export default SignupForm;
