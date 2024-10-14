import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import Button from "../Ui/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "universal-cookie";
import { updateProfile, clearErrors } from "../../slice/Profile/profileAction";
import Loader from "../Loader";
const cookies = new Cookies();
const user = cookies.get("user");
import useUpdate from "../../hooks/useUpdate ";

const UpdateProfileForm = () => {
  const { loading, handleUpdate, errors } = useUpdate({
    states: "updateProfile",
    updateFn: updateProfile, 
    clearFn: clearErrors, 
  });

  const [password, setpassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [birthday, setbirthday] = useState("");
  const [visible, setVisible] = useState(false);

  const handelInfo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    first_name && formData.append("first_name", first_name);
    last_name && formData.append("last_name", last_name);
    email && formData.append("email", email);
    phone && formData.append("phone", phone);
    birthday && formData.append("birthday", birthday);
    formData.append("_method", "put");

    handleUpdate(formData);
  };

  useEffect(() => {
    if (user.email) {
      setfirst_name(user.first_name);
      setlast_name(user.last_name);
      setEmail(user.email);
      setpassword(user.password);
      setphone(user.phone);
      setbirthday(user.birthday);
    }
  }, [user]);

  if (loading) {
    <Loader />;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-1 p-4">
        <div className="bg-white rounded-md p-4">
          <div className="mt-6">
            <form
              className="flex flex-col gap-2 sm:w-[500px] w-[300px]"
              onSubmit={handelInfo}
            >
              <FormInput
                className="lg:w-[480px] md:w-[480px] sm:w-[480px] w-[300px]"
                placeholder="First_Name"
                type="name"
                name="name"
                value={first_name}
                onChange={(e) => setfirst_name(e.target.value)}
                error={errors?.first_name}
              />
              <FormInput
                className="lg:w-[480px] md:w-[480px] sm:w-[480px] w-[300px]"
                placeholder="last_Name"
                type="name"
                name="name"
                value={last_name}
                onChange={(e) => setlast_name(e.target.value)}
                error={errors?.last_name}
              />

              <FormInput
                className="lg:w-[480px] md:w-[480px] sm:w-[480px] w-[300px]"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors?.email}
              />
              <FormInput
                className="lg:w-[480px] md:w-[480px] sm:w-[480px] w-[300px]"
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                error={errors?.password}
                icon={
                  visible ? (
                    <FaEyeSlash
                      className="cursor-pointer text-gray-400"
                      onClick={() => setVisible(!visible)}
                    />
                  ) : (
                    <FaEye
                      className=" cursor-pointer text-gray-400"
                      onClick={() => setVisible(!visible)}
                    />
                  )
                }
              />
              <FormInput
                className="lg:w-[480px] md:w-[480px] sm:w-[480px] w-[300px]"
                label="phone"
                name="phone"
                type="number"
                placeholder="012345678910"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                error={errors?.phone}
              />
              <FormInput
                className="lg:w-[480px] md:w-[480px] sm:w-[480px] w-[300px]"
                label="birthday"
                name="birthday"
                type="date"
                placeholder="example@test.com"
                value={birthday}
                onChange={(e) => setbirthday(e.target.value)}
                error={errors?.birthday}
              />
              <Button
                type="submit"
                text="update"
                variant={"default"}
                className="bg-main p-2 uppercase w-[200px] mx-auto "
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileForm;
