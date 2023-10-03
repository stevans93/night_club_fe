import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import { showToast } from "../../../../helpers/toast";

const EditCustomerForm = (props) => {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();

  const handleSaveForm = async () => {
    await saveCustomer(props.customer._id);
    props.handleEditModalClose();
  };

  const saveCustomer = async (customerId) => {
    try {
      const customer = {
        _id: customerId,
        name: nameInputRef.current.value,
        phone: phoneInputRef.current.value,
        email: emailInputRef.current.value,
      };

      // Use ClubCustomersService to update the customer
      await ClubCustomersService.updateCustomer(customerId, customer);

      // Display a success toast if the update is successful
      showToast("Customer updated successfully", "success");
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while saving the customer:", error);

      // Display an error toast if there's an error
      showToast("Error: An error occurred while saving the customer", "error");
    }
  };
  return (
    <>
      {props.isEditCustomerModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isEditCustomerModalOpen}
            onClose={props.handleEditCustomerClose}
            backdrop={props.isEditCustomerModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Edit customer
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
                      ref={nameInputRef}
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
                      ref={phoneInputRef}
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
                    ref={emailInputRef}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleSaveForm} appearance="primary">
                Ok
              </Button>
              <Button
                onClick={props.handleEditCustomerClose}
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

export default EditCustomerForm;
