import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import CouponsService from "../../../../services/couponsService";

const EditCouponForm = (props) => {
  const titleInputRef = useRef();
  const codeInputRef = useRef();
  const limitInputRef = useRef();
  const discountInputRef = useRef();
  const startDateInputRef = useRef();
  const endDateInputRef = useRef();

  const handleSaveForm = async () => {
    await saveCoupon(props.coupon._id);
    props.handleEditModalClose();
  };

  const saveCoupon = async (couponId) => {
    const coupon = {
      _id: couponId,
      title: titleInputRef.current.value,
      code: codeInputRef.current.value,
      limit: limitInputRef.current.value,
      discount: discountInputRef.current.value,
      startDate: startDateInputRef.current.value,
      endDate: endDateInputRef.current.value,
    };

    try {
      const response = await CouponsService.updateCoupon(couponId, coupon);

      // Handle the response as needed
      if (response) {
        // Handle success
        console.log("Coupon updated successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to update coupon");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while updating the coupon:", error);
    }
  };
  return (
    <>
      {props.isEditCouponModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isEditCouponModalOpen}
            onClose={props.handleEditModalClose}
            backdrop={props.isEditCouponModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Uredi Kupon
            </Modal.Header>
            <Modal.Body>
              <div className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Ime
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Ime Kupona..."
                    id="name"
                    type="text"
                    defaultValue={props.coupon.title}
                    ref={titleInputRef}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="phone">
                    Kupon Kod *
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Kupon Kod"
                    id="phone"
                    type="text"
                    defaultValue={props.coupon.code}
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
                      placeholder="Unesite Limit"
                      id="limit"
                      type="text"
                      defaultValue={props.coupon.limit}
                      ref={limitInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="discount">
                      Popust
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Unesite Popust"
                      id="discount"
                      type="text"
                      defaultValue={props.coupon.discount}
                      ref={discountInputRef}
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="startDate">
                      Pocetni Datum
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="startDate"
                      type="date"
                      defaultValue={
                        new Date(props.coupon.startDate)
                          .toISOString()
                          .split("T")[0]
                      }
                      ref={startDateInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="endDate">
                    Krajnji Datum
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="endDate"
                      type="date"
                      defaultValue={
                        new Date(props.coupon.endDate)
                          .toISOString()
                          .split("T")[0]
                      }
                      ref={endDateInputRef}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="bg-[#3498ff]"
                onClick={handleSaveForm}
                appearance="primary"
              >
                Ok
              </Button>
              <Button onClick={props.handleEditModalClose} appearance="subtle">
                Otkaži
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default EditCouponForm;
