import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";

const ActionButton = (props) => {
  const [isOpen, setIsOpen] = useState();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col relative bg-[#D0021B] w-24 rounded-lg">
        <button
          className="flex items-center bg-[#D0021B] text-white gap-1 px-2 py-2 rounded-md"
          onClick={handleOpen}
        >
          Action <MdKeyboardArrowDown size="1rem" />
        </button>
        {isOpen && (
          <div className="flex flex-col absolute top-9 z-10 w-full bg-[#979797] p-1 rounded-md">
            <DeleteButton onClick={props.handleDelete} />
            <EditButton onClick={props.handleEditModalOpen}></EditButton>
          </div>
        )}
      </div>
    </>
  );
};

export default ActionButton;
