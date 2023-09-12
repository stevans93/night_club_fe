import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const TablePagination = () => {
  return (
    <div className="bg-white flex w-full justify-center relative">
      <span className="absolute left-0">
        Show <span>15</span> of <span>150</span>
      </span>
      <div className="flex">
        <button className="bg-primary text-white">
          <MdKeyboardArrowLeft size="1.1rem" />
        </button>
        <span>15 - 150</span>
        <button className="bg-primary text-white">
          <MdKeyboardArrowRight size="1.1rem" />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
