import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";

const EditStaffForm = (props) => {
  return (
    <>
      {props.isEditStaffModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isEditStaffModalOpen}
            onClose={props.handleEditStaffModalClose}
            backdrop={props.isEditStaffModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Add new customer
            </Modal.Header>
            <Modal.Body>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col w-45 justify-between">
                  <div className="w-full flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Enter name"
                      id="name"
                      type="text"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Enter email adress"
                      id="email"
                      type="text"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Enter password"
                      id="password"
                      type="text"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="retypePassword">
                      Retype password
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Enter password"
                      id="retypePassword"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-45 flex flex-col">
                  <span className="py-2 mb-2">Permission list</span>
                  <ul>
                    <li className="flex gap-2 py-1">
                      <span className="w-2">1</span>
                      <input id="reservation" type="checkbox" />
                      <label htmlFor="reservation">Reservation</label>
                    </li>
                    <li className="flex gap-2 py-1">
                      <span className="w-2">4</span>
                      <input id="Coupon" type="checkbox" />
                      <label htmlFor="Coupon">Coupon list</label>
                    </li>
                  </ul>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={props.handleEditStaffModalClose}
                appearance="primary"
              >
                Ok
              </Button>
              <Button
                onClick={props.handleEditStaffModalClose}
                appearance="subtle"
              >
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default EditStaffForm;
