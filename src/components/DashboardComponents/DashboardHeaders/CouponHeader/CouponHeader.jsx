import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import AddCouponForm from "../../DashboardForms/AddCouponForm/AddCouponForm";

const CouponHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex ml-3 mr-3 rounded-lg items-center h-16 justify-between px-5 bg-white">
        <div className="flex items-center gap-3">
          <span>Coupon list</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select className="px-1 w-12 border rounded-xl" value="">
              <option value="" disabled>
                15
              </option>
            </select>
          </div>
          <button
            onClick={handleOpenModal}
            className="flex items-center px-5 py-3 rounded-lg bg-primary h-8 text-white gap-2"
          >
            <AiOutlinePlus size="1.3rem" />
            Add coupon
          </button>
        </div>
      </div>
      <AddCouponForm
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default CouponHeader;
