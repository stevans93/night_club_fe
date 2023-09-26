import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";

const EditStaffForm = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const reservationInputRef = useRef();
  const couponListInputRef = useRef();

  const handleSaveForm = async () => {
    await saveStaff(props.staff._id);
    props.handleEditStaffModalClose();
  };

  const saveStaff = async (staffId) => {
    const staff = {
      _id: staffId,
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      email: emailInputRef.current.value,
      permissions: [],
    };

    if (reservationInputRef.current.checked) {
      staff.permissions.push(reservationInputRef.current.value);
    }
    if (couponListInputRef.current.checked) {
      staff.permissions.push(couponListInputRef.current.value);
    }

    const token = localStorage.getItem("nc_token");
    await fetch(`http://localhost:4000/api/user/update/${staffId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(staff),
    });
  };
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
                    <label className="mb-2 mt-2" htmlFor="firstName">
                      firstName
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Enter firstName"
                      id="firstName"
                      type="text"
                      ref={firstNameInputRef}
                      defaultValue={props.staff.firstName}
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="lastName">
                      lastName
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Enter lastName"
                      id="lastName"
                      type="text"
                      defaultValue={props.staff.lastName}
                      ref={lastNameInputRef}
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
                      defaultValue={props.staff.email}
                      ref={emailInputRef}
                    />
                  </div>
                </div>
                <div className="w-45 flex flex-col">
                  <span className="py-2 mb-2">Permission list</span>
                  <ul>
                    <li className="flex gap-2 py-1">
                      <span className="w-2">1</span>
                      <input
                        id="reservation"
                        type="checkbox"
                        value="reservation"
                        ref={reservationInputRef}
                      />
                      <label htmlFor="reservation">Reservation</label>
                    </li>
                    <li className="flex gap-2 py-1">
                      <span className="w-2">4</span>
                      <input
                        id="Coupon"
                        type="checkbox"
                        value="coupons"
                        ref={couponListInputRef}
                      />
                      <label htmlFor="Coupon">Coupon list</label>
                    </li>
                  </ul>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleSaveForm} appearance="primary">
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
