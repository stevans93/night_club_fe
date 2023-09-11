import { BsSearch } from "react-icons/bs";
import { BiListUl } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

const CouponHeader = () => {
  return (
    <div className="flex ml-3 mr-3 rounded-lg items-center h-16 justify-between px-5 bg-white">
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
        <button className="flex items-center px-5 py-3 rounded-lg bg-primary h-8 text-white gap-2">
          <AiOutlinePlus size='1.3rem' />
          Add coupon
        </button>
      </div>
    </div>
  );
};

export default CouponHeader;
