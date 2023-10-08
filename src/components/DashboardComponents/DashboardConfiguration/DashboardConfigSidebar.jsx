import { IoMdSettings } from "react-icons/io";
import { MdTableRestaurant } from "react-icons/md";

const DashboardConfigSidebar = (props) => {
  return (
    <div className="flex flex-col w-3/12 h-fit bg-white p-4 shadow-lg mt-4">
      <button
        onClick={props.onShowGeneral}
        className="flex items-center gap-1 px-2 py-4 focus:bg-[#475DDB] focus:text-white rounded-md"
      >
        <IoMdSettings />
        General
      </button>
      <button
        onClick={props.onShowTables}
        className="flex items-center gap-1 px-2 py-4 focus:bg-[#475DDB] focus:text-white rounded-md"
      >
        <MdTableRestaurant />
        Tables
      </button>
    </div>
  );
};

export default DashboardConfigSidebar;
