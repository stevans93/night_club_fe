import { FaLock } from "react-icons/fa";

const LockButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center bg-[#F5A623] text-white px-2 py-2 rounded-lg"
    >
      <FaLock />
    </button>
  );
};

export default LockButton;
