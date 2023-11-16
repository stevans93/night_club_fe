import "../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import UsersService from "../../services/userService";

const EditUserForm = (props) => {
  const mobilePhoneInputRef = useRef();
  const emailInputRef = useRef();

  const handleSaveForm = async () => {
    await saveUser(props.user._id);
    props.handleEditModalClose();
  };

  const saveUser = async (userId) => {
    const user = {
      _id: userId,
      mobilePhone: mobilePhoneInputRef.current.value,
      email: emailInputRef.current.value,
    };

    try {
      const response = await UsersService.updateUser(userId, user);

      // Handle the response as needed
      if (response) {
        // Handle success
        console.log("user updated successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to update user");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while updating the user:", error);
    }
  };
  return (
    <>
      {props.isEditUserModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isEditUserModalOpen}
            onClose={props.handleEditModalClose}
            backdrop={props.isEditUserModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Uredi Korisnika
            </Modal.Header>
            <Modal.Body>
              <div className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="phone">
                    Telefon
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Telefon"
                    id="phone"
                    type="text"
                    defaultValue={props.user.mobilePhone}
                    ref={mobilePhoneInputRef}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite email"
                    id="email"
                    type="text"
                    defaultValue={props.user.email}
                    ref={emailInputRef}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="bg-[#3498ff]"
                onClick={handleSaveForm}
                appearance="primary"
              >
                Potvrdi
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

export default EditUserForm;
