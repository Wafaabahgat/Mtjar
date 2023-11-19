import UpdateProfileForm from "../components/Form/UpdateProfileForm";
import MetaDate from "../lib/metaDate";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-20  flex-1 bg-white ">
      <div className="max-w-[600px] min-h-[400px] mx-auto bg-green-500 rounded-md p-5">
        <MetaDate ttl="Update Profile" disc="Update Profile" />
        <UpdateProfileForm />
      </div>
    </div>
  );
};

export default Profile;
