import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import CouponsService from "../../../../services/couponsService";

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

    try {
      const response = await CouponsService.addCoupon(coupon);

      // Handle the response as needed
      if (response) {
        // Handle success
        console.log("Coupon saved successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to save coupon", error);
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while saving the coupon:", error);
    }
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
              Dodaj Kupon
            </Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Naslov
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Naslov"
                    id="name"
                    type="text"
                    ref={titleInputRef}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="phone">
                    Kod Kupona *
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Kod Kupona"
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
                      placeholder="Unesite Limit"
                      id="limit"
                      type="text"
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
                      ref={discountInputRef}
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="startDate">
                      Početni Datum
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
                      Krajnji Datum
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
              <Button
                className="bg-[#3498ff]"
                onClick={handleSaveForm}
                appearance="primary"
              >
                Potvrdi
              </Button>
              <Button
                onClick={props.handleCouponModalClose}
                appearance="subtle"
              >
                Otkaži
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default AddCouponForm;
