import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef, useState } from "react";
import ReservationsService from "../../../../services/reservationsService";

const AddReservationForm = (props) => {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const personsInputRef = useRef();
  const dateInputRef = useRef();
  const couponInputRef = useRef();

  const [table, setTable] = useState(0);

  const handlePersonsChange = () => {
    let value = parseInt(personsInputRef.current.value, 10); // Parse the input value as an integer

    // Check if the value is within the range of 0 to 3
    if (isNaN(value)) {
      // Handle non-integer input
      value = 0;
    } else if (value < 0) {
      value = 0;
    } else if (value > table.maxPersons) {
      value = "";
    }

    // Update the input's value
    personsInputRef.current.value = value;
  };

  const handleSaveForm = async () => {
    await saveReservation();
    props.handleAddReservationModalClose();
  };

  const saveReservation = async () => {
    const reservation = {
      name: nameInputRef.current.value,
      phone: phoneInputRef.current.value,
      email: emailInputRef.current.value,
      tableId: table._id,
      persons: personsInputRef.current.value,
      date: dateInputRef.current.value,
      couponCode: couponInputRef.current.value,
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
                    <label className="mb-2 mt-2" htmlFor="">
                      Table
                    </label>
                    <select
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      value={props.selectedTable}
                      disabled={props.isDateSelected}
                      onChange={(event) => {
                        setTable(JSON.parse(event.target.value));
                      }}
                    >
                      {props.tables.map((x) => {
                        return (
                          <option key={x._id} value={JSON.stringify(x)}>
                            {x.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="person">
                      Person
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder={`Select max ${table.maxPersons}`}
                      id="person"
                      type="number"
                      min={0}
                      max={table.maxPersons}
                      ref={personsInputRef}
                      onChange={handlePersonsChange}
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
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(event) => {
                        props.handleChangeReservationDate(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="coupon">
                      Coupon
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="coupon"
                      type="text"
                      placeholder="Enter coupon code"
                      ref={couponInputRef}
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
