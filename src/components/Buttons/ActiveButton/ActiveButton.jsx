import { IoMdCheckboxOutline } from "react-icons/io";

const ActiveButton = (props) => {
  const activeStyle = "bg-[#1BC532]";
  const inactiveStyle = "bg-[#D0021B]";

  return (
    <button
      className={`flex gap-1 items-center text-white w-3/4 px-2 py-1 rounded-lg ${
        props.text === "Inactive" ? inactiveStyle : activeStyle
      }`}
    >
      <IoMdCheckboxOutline size="1.1rem" />
      <span>{props.text}</span>
    </button>
  );
};

export default ActiveButton;
