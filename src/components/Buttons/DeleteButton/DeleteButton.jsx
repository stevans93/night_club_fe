import { MdDeleteForever } from "react-icons/md";

const DeleteButton = () => {
  return (
    <button className="flex items-center bg-[#D0021B] rounded-lg px-3 py-2 text-white">
      <MdDeleteForever size="1.1rem" />
      Delete
    </button>
  );
};

export default DeleteButton;
