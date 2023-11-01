import { MdDeleteForever } from "react-icons/md";

const DeleteButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center bg-[#D0021B] rounded-lg px-3 py-2 text-white"
    >
      <MdDeleteForever size="1.1rem" />
      Izbrisi
    </button>
  );
};

export default DeleteButton;
