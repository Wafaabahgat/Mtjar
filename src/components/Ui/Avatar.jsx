import { useEffect, useRef, useState } from "react";
import ProfileImg from "./ProfileImg";
import Cookies from "universal-cookie";
import UserCard from "./UserCard";
const cookies = new Cookies();
const user = cookies.get("user");

const Avatar = () => {
  const [open, setopen] = useState(false);
  const userCard = useRef(null);

  const handleLogout = () => {
    cookies.remove("user");
    window.location.href = "/login";
  };

  useEffect(() => {
    const closeCard = (e) => {
      if (!userCard?.current?.contains(e.target)) {
        setopen(false);
      }
    };
    document.body.addEventListener("mousedown", closeCard);
    return () => {
      document.body.removeEventListener("mousedown", closeCard);
    };
  }, []);
  return (
    <div ref={userCard}>
      <ProfileImg
        onClick={() => setopen(!open)} //true
        img={user?.image}
        text={user?.first_name}
        link={user?.id ? null : "/login"}
      />
      {open && user?.id ? (
        <UserCard onclick={handleLogout} user={user} />
      ) : null}
    </div>
  );
};

export default Avatar;
