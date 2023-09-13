import { IoMdCheckboxOutline } from "react-icons/io";

const ActiveButton = (props) => {
  return (
    <button className="flex gap-1 items-center bg-[#1BC532] text-white w-3/4 px-2 py-1 rounded-lg">
      <IoMdCheckboxOutline size="1.1rem" />
      <span>{props.text}</span>
    </button>
  );
};

export default ActiveButton;
