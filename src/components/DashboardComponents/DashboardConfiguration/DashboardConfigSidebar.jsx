import { IoMdSettings } from "react-icons/io";
import { MdTableRestaurant } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import { IoMdMegaphone } from "react-icons/io";

const DashboardConfigSidebar = (props) => {
  const ncUser = JSON.parse(localStorage.getItem("nc_user"));

  const userRole = ncUser ? ncUser.role : null;

  return (
    <div className="flex flex-col w-2/12 h-fit bg-white p-4 shadow-lg mt-4">
      <button
        onClick={props.onShowGeneral}
        className="flex items-center gap-1 px-2 py-4 focus:bg-[#475DDB] focus:text-white rounded-md"
      >
        <IoMdSettings />
        General
      </button>
      {userRole === "manager" && (
        <button
          onClick={props.onShowTables}
          className="flex items-center gap-1 px-2 py-4 focus:bg-[#475DDB] focus:text-white rounded-md"
        >
          <MdTableRestaurant />
          Tables
        </button>
      )}
      <button
        onClick={props.onShowSlider}
        className="flex items-center gap-1 px-2 py-4 focus:bg-[#475DDB] focus:text-white rounded-md"
      >
        <BsImages />
        Slider
      </button>
      {userRole === "manager" && (
        <button
          onClick={props.onShowAvaliableDays}
          className="flex items-center gap-1 px-2 py-4 focus:bg-[#475DDB] focus:text-white rounded-md"
        >
          <IoMdMegaphone />
          Awaliable days
        </button>
      )}
    </div>
  );
};

export default DashboardConfigSidebar;
