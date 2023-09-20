import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";

const EditReservationForm = (props) => {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const tableInputRef = useRef();
  const personsInputRef = useRef();
  const dateInputRef = useRef();

  const handleSaveForm = async () => {
    await saveReservation(props.reservation._id);
    props.handleEditModalClose();
  };

  const saveReservation = async (reservationId) => {
    const reservation = {
      _id: reservationId,
      name: nameInputRef.current.value,
      phone: phoneInputRef.current.value,
      email: emailInputRef.current.value,
      table: tableInputRef.current.value,
      persons: personsInputRef.current.value,
      date: dateInputRef.current.value,
    };

    await fetch(
      `http://localhost:4000/api/reservations/updateReservation/${reservationId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      }
    );
  };

  return (
    <>
      {props.isEditModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isEditModalOpen}
            onClose={props.handleCloseModal}
            backdrop={props.isEditModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Edit Reservation
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
                      defaultValue={props.reservation.name}
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
                      defaultValue={props.reservation.phone}
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
                    defaultValue={props.reservation.email}
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
                      defaultValue={props.reservation.table}
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
                      defaultValue={props.reservation.persons}
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
                      defaultValue={props.reservation.date}
                      ref={dateInputRef}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleSaveForm} appearance="primary">
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

export default EditReservationForm;
