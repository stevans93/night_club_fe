import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import EventsService from "../../../../services/eventsService";

const AddEventForm = (props) => {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();
  const ticketPriceInputRef = useRef();
  const typeInputRef = useRef();
  const imageInputRef = useRef();

  const handleSaveForm = async () => {
    await saveEvent();
    props.handleEventModalClose();
  };

  const saveEvent = async () => {
    const event = {
      title: nameInputRef.current.value,
      description: descriptionInputRef.current.value,
      dateOfEvent: dateInputRef.current.value,
      ticketPrice: ticketPriceInputRef.current.value,
      type: typeInputRef.current.value,
      image: imageInputRef.current.value,
    };

    try {
      const response = await EventsService.addEvent(event);

      // Handle the response as needed
      if (response) {
        // Handle success
        console.log("Event saved successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to save event");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while saving the event:", error);
    }
  };
  return (
    <>
      {props.isAddEventModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isAddEventModalOpen}
            onClose={props.handleEventModalClose}
            backdrop={props.isAddEventModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Add Event
            </Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
                <div className="w-full flex flex-col">
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
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="phone">
                    Event description *
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Enter Event description"
                    id="phone"
                    type="text"
                    ref={descriptionInputRef}
                  />
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="date">
                      Date
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Set date"
                      id="date"
                      type="date"
                      ref={dateInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="ticketPrice">
                      Ticket Price
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Set ticketPrice"
                      id="ticketPrice"
                      type="text"
                      ref={ticketPriceInputRef}
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="type">
                      Type
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="type"
                      placeholder="Enter type"
                      type="text"
                      ref={typeInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="image">
                      Image
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Upload image"
                      id="image"
                      type="text"
                      ref={imageInputRef}
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="bg-[#3498ff]"
                onClick={handleSaveForm}
                appearance="primary"
              >
                Ok
              </Button>
              <Button onClick={props.handleEventModalClose} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default AddEventForm;
