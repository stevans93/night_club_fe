import { AiOutlinePlus } from "react-icons/ai";

const StaffHeader = (props) => {
  return (
    <>
      <div className="flex ml-3 mr-3 rounded-lg items-center h-16 justify-between px-5 bg-white">
        <div className="flex items-center">
          <span>Staff list</span>
        </div>
        <div className="flex items-center">
          <button
            onClick={props.handleAddStaffModalOpen}
            className="flex items-center px-3 rounded-xl bg-primary h-8 text-white gap-2"
          >
            <AiOutlinePlus />
            Add new staff
          </button>
        </div>
      </div>
    </>
  );
};

export default StaffHeader;
