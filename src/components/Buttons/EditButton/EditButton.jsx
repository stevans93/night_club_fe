import { BiSolidEdit } from "react-icons/bi";

const EditButton = (props) => {
  return (
    <button onClick={props.onClick} className="flex items-center bg-[#20339C] rounded-lg px-3 py-2 text-white">
      <BiSolidEdit size="1.1rem" />
      Edit
    </button>
  );
};

export default EditButton;
