import { useRef } from "react";
import { Modal, Button } from "rsuite";

const ResetPasswordForm = (props) => {
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const handleSaveForm = async () => {
    await savePassword(props.staff._id);
    props.handleResetStaffPasswordModalClose();
  };

  const savePassword = async (staffId) => {
    const staffPassword = {
      _id: staffId,
      password: passwordInputRef.current.value,
      confirmPassword: confirmPasswordInputRef.current.value,
    };

    const token = localStorage.getItem("nc_token");
    await fetch(`http://localhost:4000/api/user/update/${staffId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(staffPassword),
    });
  };
  return (
    <>
      {props.isResetStaffPasswordModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isResetStaffPasswordModalOpen}
            onClose={props.handleResetStaffPasswordModalClose}
            backdrop={props.isResetStaffPasswordModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Reset Password
            </Modal.Header>
            <Modal.Body>
              <div className="flex justify-between flex-wrap">
                <div className="w-5/12 flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Enter password"
                    id="password"
                    type="text"
                    ref={passwordInputRef}
                  />
                </div>
                <div className="w-5/12 flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="confirmPassword">
                    Confirm password
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Enter password"
                    id="confirmPassword"
                    type="text"
                    ref={confirmPasswordInputRef}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleSaveForm} appearance="primary">
                Ok
              </Button>
              <Button
                onClick={props.handleResetStaffPasswordModalClose}
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

export default ResetPasswordForm;