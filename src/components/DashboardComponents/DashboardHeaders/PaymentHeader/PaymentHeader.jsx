import { BsSearch } from "react-icons/bs";
import { BiListUl } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

const PaymentHeader = () => {
  return (
    <div className="flex rounded-lg items-center h-16 justify-between px-5 bg-white shadow-lg">
      <div className="flex items-center gap-3">
        <span>Payment History</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="px-1 w-12 border rounded-xl" value="">
            <option value="" disabled>
              15
            </option>
          </select>
        </div>
        <div className="flex items-center border rounded-xl w-fit h-8 px-2">
          <input
            className="focus-visible:outline-none"
            placeholder="Order number"
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

        <select
          className="h-8 w-20 border rounded-xlpx-1 border rounded-xl"
          value=""
        >
          <option value="" disabled>
            Status
          </option>
        </select>
        <button className="flex items-center px-3 rounded-xl bg-primary h-8 text-white gap-2">
          <FaFilter />
          Filter
        </button>
      </div>
    </div>
  );
};

export default PaymentHeader;
