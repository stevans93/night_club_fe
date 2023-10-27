import { useEffect, useState } from "react";
import UsersService from "../../services/userService";

const UserProfile = () => {
  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const userId = ncUser ? ncUser._id : null;

  const [info, setInfo] = useState();
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await UsersService.getSingleUser(userId);
        setInfo(userInfo);
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching user info:", error);
      }
    };
    if (userId) {
      fetchUserInfo();
    }
  }, []);

  return (
    <div className="flex flex-col z-50 items-center relative">
      <div
        onClick={() => setShowDetails(!showDetails)}
        className="flex w-20 h-20 bg-blue-700 rounded-full cursor-pointer"
      >
        {info && <img src={info.image} alt="" />}
      </div>
      {showDetails && info && (
        <div className="flex flex-col w-fit bg-secondary absolute top-20 w-72 items-center rounded-lg">
          <span className="text-2xl py-2 border-b-2 w-full text-center">
            {info.firstName + " " + info.lastName}
          </span>
          <span className="text-md py-2 border-b-2 w-full text-center">
            Moje rezervacije
          </span>
          <div className="flex text-md py-2 justify-between w-full px-10">
            <span>Rezervisano</span>
            <span>0</span>
          </div>
          <div className="flex text-md py-2 justify-between w-full px-10">
            <span>Odbijeno</span>
            <span>0</span>
          </div>
          <div className="flex text-md py-2 justify-between w-full px-10 border-b-2">
            <span>Otkazano</span>
            <span>0</span>
          </div>
          <button className="flex py-2 px-10 bg-primary text-white rounded-lg mt-10 mb-4 rounded-xl">
            Izloguj se
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
