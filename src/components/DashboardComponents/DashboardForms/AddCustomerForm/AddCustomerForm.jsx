import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";

const AddCustomerForm = (props) => {
  return (
    <>
      {props.isModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isModalOpen}
            onClose={props.handleCloseModal}
            backdrop={props.isModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Add new customer
            </Modal.Header>
            <Modal.Body>
              <div className="flex flex-wrap">
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
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
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Enter Phone"
                      id="phone"
                      type="text"
                    />
                  </div>
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
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.handleCloseModal} appearance="primary">
                Ok
              </Button>
              <Button onClick={props.handleCloseModal} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default AddCustomerForm;
