import { AiOutlinePlus } from "react-icons/ai";

const StaffHeader = (props) => {
  return (
    <>
      <div className="flex rounded-lg items-center h-16 justify-between px-5 bg-white shadow-lg">
        <div className="flex items-center">
          <span>Spisak Osoblja</span>
        </div>
        <div className="flex items-center">
          <button
            onClick={props.handleAddStaffModalOpen}
            className="flex items-center px-3 rounded-xl bg-primary h-8 text-white gap-2"
          >
            <AiOutlinePlus />
            Dodaj Novo Osoblje
          </button>
        </div>
      </div>
    </>
  );
};

export default StaffHeader;
