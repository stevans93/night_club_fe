import "../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import ReservationsService from "../../services/reservationsService";
import { useRef } from "react";

const ReservationModal = (props) => {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const tableInputRef = useRef();
  const personsInputRef = useRef();
  const dateInputRef = useRef();
  const couponInputRef = useRef();

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
      coupon: couponInputRef.current.value,
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
      {props.showReservationModal && (
        <div className="flex m-auto text-center">
          <Modal
            size="full"
            open={props.showReservationModal}
            onClose={props.handleCloseReservationModal}
            backdrop={props.showReservationModal}
          >
            <Modal.Body className="m-0 p-0 min-h-400 h-fit">
              <div className="flex h-full">
                <div className="flex w-1/2 min-h-400 flex-1">
                  <img className="flex w-full" src="" alt="" />
                </div>
                <div className="flex flex-col flex-1 px-6 pb-6">
                  <Modal.Header className="border-b-2 text-2xl py-2 text-center w-full">
                    Rezervacija
                  </Modal.Header>
                  <div className="flex justify-between">
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
                        onChange={(event) => {
                          props.handleChangeTable(event.target.value);
                        }}
                      >
                        <option value="">Table</option>
                        {props.tables.map((x) => {
                          return (
                            <option key={x._id} value={x}>
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
                        placeholder="date"
                        id="date"
                        type="date"
                        ref={dateInputRef}
                      />
                    </div>
                    <div className="w-45 flex flex-col">
                      <label className="mb-2 mt-2" htmlFor="coupon">
                        Coupon
                      </label>
                      <input
                        className="py-3 px-2 border-2 border-black rounded-lg"
                        placeholder="Enter coupon code"
                        id="coupon"
                        type="text"
                        ref={couponInputRef}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
                onClick={props.handleCloseReservationModal}
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

export default ReservationModal;
