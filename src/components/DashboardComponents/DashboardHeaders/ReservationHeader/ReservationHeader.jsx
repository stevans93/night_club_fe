import { BsSearch } from "react-icons/bs";
import { BiListUl } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

const ReservationHeader = () => {
  return (
    <div className="flex ml-3 mr-3 rounded-lg items-center h-16 justify-between px-5 bg-white">
      <div className="flex items-center gap-3">
        <span>Todays Reservation</span>
        <button className="flex items-center px-3 rounded-lg bg-primary h-8 text-white">
          <BiListUl size="1.5rem" />
          All Reservation list
        </button>
        <button className="flex items-center px-3 rounded-lg bg-primary h-8 text-white">
          <AiOutlinePlus size="1.2rem" />
          Add reservation
        </button>
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="px-1 w-12 border rounded-xl" value="">
            <option value="" disabled>
              15
            </option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center border rounded-xl w-fit h-8 px-2">
          <input
            className="focus-visible:outline-none"
            placeholder="Order ID"
            type="search"
          />
          <BsSearch />
        </div>

        <div>
          <input
            className="border rounded-xl w-fit h-8 px-2"
            placeholder="Date"
            type="date"
          />
        </div>

        <div>
          <select
            className="h-8 w-20 border rounded-xlpx-1 border rounded-xl"
            value=""
          >
            <option value="" disabled>
              Table
            </option>
          </select>
        </div>

        <select
          className="h-8 w-20 border rounded-xlpx-1 border rounded-xl"
          value=""
        >
          <option value="" disabled>
            Status
          </option>
        </select>
        <button className="flex items-center px-3 rounded-lg bg-primary h-8 text-white gap-2">
          <FaFilter />
          Filter
        </button>
      </div>
    </div>
  );
};

export default ReservationHeader;
