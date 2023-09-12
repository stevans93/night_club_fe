import { TiCancel } from "react-icons/ti";

const CanceledButton = () => {
  return (
    <button className="flex items-center bg-[#D0021B] text-white w-3/4 px-2 py-1 rounded-lg">
      <TiCancel size="1.1rem" />
      <span>Canceled</span>
    </button>
  );
};

export default CanceledButton;
