import React from "react";
import UpdateProfileForm from "../components/Form/UpdateProfileForm";
import MetaDate from "../lib/metaDate";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-20  flex-1 bg-white ">
      <div className="max-w-[700px] min-h-[700px] mx-auto bg-green-500 rounded-md py-8 px-4">
        <MetaDate ttl="Update Profile" disc="Update Profile" />
        <div className="flex flex-col justify-start items-start py-6">
          <h2 className="text-3xl font-bold text-gray-100">Profile</h2>
          <p className="text-gray-300 mt-2">
            Manage your details, view your tier status and change your password
          </p>
        </div>
        <UpdateProfileForm />
      </div>
    </div>
  );
};

export default Profile;
