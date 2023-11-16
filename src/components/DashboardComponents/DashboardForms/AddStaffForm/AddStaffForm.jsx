import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import UsersService from "../../../../services/userService";

const AddStaffForm = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const repeatPasswordInputRef = useRef();
  const reservationInputRef = useRef();
  const couponListInputRef = useRef();

  const handleSaveForm = async () => {
    await saveStaff();
    props.handleAddStaffModalClose();
  };

  const saveStaff = async () => {
    const staff = {
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      repeatPassword: repeatPasswordInputRef.current.value,
      permissions: [],
    };

    if (reservationInputRef.current.checked) {
      staff.permissions.push(reservationInputRef.current.value);
    }
    if (couponListInputRef.current.checked) {
      staff.permissions.push(couponListInputRef.current.value);
    }

    try {
      const response = await UsersService.addUser(staff); // Use the UsersService to add a user

      // Handle success
      if (response) {
        console.log("User added successfully");
        // Additional code here if needed
      }
    } catch (error) {
      // Handle errors
      console.error("An error occurred while adding the user:", error);
    }
  };

  return (
    <>
      {props.isAddStaffModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isAddStaffModalOpen}
            onClose={props.handleAddStaffModalClose}
            backdrop={props.isAddStaffModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Dodaj Novo Osoblje
            </Modal.Header>
            <Modal.Body>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col w-45 justify-between">
                  <div className="w-full flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="firstName">
                      Ime
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Unesite Ime..."
                      id="firstName"
                      type="text"
                      ref={firstNameInputRef}
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="lastName">
                      Prezime
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Unesite Prezime..."
                      id="lastName"
                      type="text"
                      ref={lastNameInputRef}
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="email">
                      E-mail Adresa
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Unesite E-mail Adresu..."
                      id="email"
                      type="text"
                      ref={emailInputRef}
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="password">
                      Lozinka
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Unesite Lozinku..."
                      id="password"
                      type="text"
                      ref={passwordInputRef}
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="retypePassword">
                      Potvrdi Lozinku
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Potvrdi Lozinku..."
                      id="retypePassword"
                      type="text"
                      ref={repeatPasswordInputRef}
                    />
                  </div>
                </div>
                <div className="w-45 flex flex-col">
                  <span className="py-2 mb-2">Lista Dozvola</span>
                  <ul>
                    <li className="flex gap-2 py-1">
                      <span className="w-2">1</span>
                      <input
                        id="reservation"
                        type="checkbox"
                        value="reservation"
                        ref={reservationInputRef}
                      />
                      <label htmlFor="reservation">Rezervacije</label>
                    </li>
                    <li className="flex gap-2 py-1">
                      <span className="w-2">2</span>
                      <input
                        id="Coupon"
                        type="checkbox"
                        value="coupons"
                        ref={couponListInputRef}
                      />
                      <label htmlFor="Coupon">Lista Kupona</label>
                    </li>
                  </ul>
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
              <Button
                onClick={props.handleAddStaffModalClose}
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

export default AddStaffForm;
