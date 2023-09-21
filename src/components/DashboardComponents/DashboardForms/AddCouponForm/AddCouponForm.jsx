import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";

const AddCouponForm = (props) => {
  const titleInputRef = useRef();
  const codeInputRef = useRef();
  const limitInputRef = useRef();
  const discountInputRef = useRef();
  const startDateInputRef = useRef();
  const endDateInputRef = useRef();

  const handleSaveForm = async () => {
    await saveCoupon();
    props.handleCouponModalClose();
  };

  const saveCoupon = async () => {
    const coupon = {
      title: titleInputRef.current.value,
      code: codeInputRef.current.value,
      limit: limitInputRef.current.value,
      discount: discountInputRef.current.value,
      startDate: startDateInputRef.current.value,
      endDate: endDateInputRef.current.value,
    };

    const response = await fetch(
      `http://localhost:4000/api/coupons/addCoupon`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coupon),
      }
    );
  };
  return (
    <>
      {props.isAddCouponModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isAddCouponModalOpen}
            onClose={props.handleCouponModalClose}
            backdrop={props.isAddCouponModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Add Coupon
            </Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Title
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Enter title"
                    id="name"
                    type="text"
                    ref={titleInputRef}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="phone">
                    Coupon Code *
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Enter Coupon Code"
                    id="phone"
                    type="text"
                    ref={codeInputRef}
                  />
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="limit">
                      Limit
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Set Limit"
                      id="limit"
                      type="text"
                      ref={limitInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="discount">
                      Discount
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Set discount"
                      id="discount"
                      type="text"
                      ref={discountInputRef}
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="startDate">
                      Start Date
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="startDate"
                      type="date"
                      ref={startDateInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="endDate">
                      End Date
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="endDate"
                      type="date"
                      ref={endDateInputRef}
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleSaveForm} appearance="primary">
                Ok
              </Button>
              <Button onClick={props.handleCouponModalClose} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default AddCouponForm;
