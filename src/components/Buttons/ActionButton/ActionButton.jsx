import { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";

const ActionButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const actionRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (actionRef.current && !actionRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <>
      <div
        ref={actionRef}
        className="flex flex-col relative bg-[#D0021B] w-24 rounded-lg"
      >
        <button
          id={"actions"}
          className="flex items-center bg-[#D0021B] text-white gap-1 px-2 py-2 rounded-md"
          onClick={handleOpen}
        >
          Opcije <MdKeyboardArrowDown id={"actions-svg"} size="1rem" />
        </button>
        {isOpen && (
          <div className="flex flex-col absolute top-9 z-10 w-full bg-[#efeded] p-1 rounded-md gap-1">
            <EditButton onClick={props.handleEditModalOpen}></EditButton>
            <DeleteButton onClick={props.handleDelete} />
          </div>
        )}
      </div>
    </>
  );
};

export default ActionButton;
