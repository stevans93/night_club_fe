import { LuBellRing } from "react-icons/lu";
import { BsDash } from "react-icons/bs";
import { LiaCocktailSolid } from "react-icons/lia";

const DashboardTablesHeader = () => {
  return (
    <div className="w-full rounded-xl">
      <div className="flex flex-col ml-3 items-center">
        <span className="flex py-3 font-bold text-xl">TABLES</span>
        <div className="flex gap-5 w-full justify-center pb-4 border-b-2">
          <button className="flex bg-[#E8E8E8] rounded-lg px-3 py-2 items-center gap-1">
            <span className="flex bg-primary text-white items-center px-2 rounded-sm">
              0
            </span>
            <LuBellRing size="1rem" />
            Have a new order
          </button>
          <button className="flex bg-[#E8E8E8] rounded-lg px-3 py-2 items-center gap-1">
            <span className="flex bg-primary text-white items-center px-2 rounded-sm">
              0
            </span>
            <BsDash size="1.5rem" />
            The Table is empty
          </button>
          <button className="flex bg-[#E8E8E8] rounded-lg px-3 py-2 items-center gap-1">
            <span className="flex bg-primary text-white items-center px-2 rounded-sm">
              0
            </span>
            <LiaCocktailSolid size="1.5rem" />
            occupied tables
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardTablesHeader;
