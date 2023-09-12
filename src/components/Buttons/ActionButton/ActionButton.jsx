import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";

const ActionButton = () => {
  const [isOpen, setIsOpen] = useState();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col relative bg-[#D0021B] w-fit rounded-lg">
      <button
        className="flex items-center bg-[#D0021B] text-white gap-1 px-2 py-2 rounded-md"
        onClick={handleOpen}
      >
        Action <MdKeyboardArrowDown size="1rem" />
      </button>
      {isOpen && (
        <div className="flex flex-col absolute top-9 z-10 w-full bg-[#979797] p-1 rounded-md">
          <button className="flex items-center bg-white text-[#D0021B] gap-1 px-2 py-2 rounded-md hover:bg-[#979797] border-b-2">
            <RiDeleteBin2Fill size="1.1rem" /> Delete
          </button>
          <button className="flex items-center bg-white text-[#20339C] gap-1 px-2 py-2 rounded-md hover:bg-[#979797]">
            <BiSolidEdit size="1.1rem" /> Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionButton;
