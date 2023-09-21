import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";

const EditCouponForm = (props) => {
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
              Edit Coupon
            </Modal.Header>
            <Modal.Body>
              <div className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Title
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Enter title"
                    id="name"
                    type="text"
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
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.handleEditModalClose} appearance="primary">
                Ok
              </Button>
              <Button onClick={props.handleEditModalClose} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default EditCouponForm;
