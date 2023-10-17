import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import ReservationsService from "../../../../services/reservationsService";

const AddReservationForm = (props) => {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const tableInputRef = useRef();
  const personsInputRef = useRef();
  const dateInputRef = useRef();

  const handleSaveForm = async () => {
    await saveReservation();
    props.handleAddReservationModalClose();
  };

  const saveReservation = async () => {
    const reservation = {
      name: nameInputRef.current.value,
      phone: phoneInputRef.current.value,
      email: emailInputRef.current.value,
      table: tableInputRef.current.value,
      persons: personsInputRef.current.value,
      date: dateInputRef.current.value,
    };

    try {
      await ReservationsService.addReservation(reservation);
      // Handle success, e.g., show a success message
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("An error occurred while saving the reservation:", error);
    }
  };

  return (
    <>
      {props.isAddReservationModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isAddReservationModalOpen}
            onClose={props.handleAddReservationModalClose}
            backdrop={props.isAddReservationModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Add Reservation
            </Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
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
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="table">
                      Table
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Table"
                      id="table"
                      type="text"
                      ref={tableInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="person">
                      Person
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Select a person"
                      id="person"
                      type="text"
                      ref={personsInputRef}
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="date">
                      Date
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="date"
                      type="date"
                      ref={dateInputRef}
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="bg-[#3498ff]"
                type="submit"
                onClick={handleSaveForm}
                appearance="primary"
              >
                Ok
              </Button>
              <Button
                onClick={props.handleAddReservationModalClose}
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

export default AddReservationForm;
