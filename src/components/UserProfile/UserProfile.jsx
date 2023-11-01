import { useEffect, useState } from "react";
import UsersService from "../../services/userService";

const UserProfile = ({user}) => {
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
    <div className="flex flex-col z-50 items-center relative m-2">
      <div
        onClick={() => setShowDetails(!showDetails)}
        className="flex w-10 h-10 bg-primary rounded-full cursor-pointer"
      >
        <span className="text-white text-2xl mx-auto flex items-center">
          {info && user.firstName.slice(0,1)}
        </span>
      </div>
      {showDetails && info && (
        <div className="flex flex-col w-[200px] bg-secondary absolute top-12 w-72 items-center rounded-lg mr-6">
          <span className="text-2xl py-2 border-b-2 w-full text-center">
            {info.firstName + " " + info.lastName}
          </span>
          <span className="text-md py-2 border-b-2 w-full text-center">
            My reservations
          </span>
          <div className="flex text-md py-2 justify-between px-10 w-full">
            <span>Reserved</span>
            <span>0</span>
          </div>
          <div className="flex text-md py-2 justify-between px-10 w-full">
            <span>Rejected</span>
            <span>0</span>
          </div>
          <div className="flex text-md py-2 justify-between px-10 w-full border-b-2">
            <span>Cancelled {' '}</span>
            <span> {' '} 0</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
