import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import { showToast } from "../../../../helpers/toast";
import EventsService from "../../../../services/eventsService";

const EditEventForm = (props) => {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();
  const ticketPriceInputRef = useRef();
  const typeInputRef = useRef();

  const handleSaveForm = async () => {
    await saveEvent(props.event._id);
    props.handleEditModalClose();
  };

  const saveEvent = async (eventId) => {
    const event = {
      _id: eventId,
      name: nameInputRef.current.value,
      description: descriptionInputRef.current.value,
      date: dateInputRef.current.value,
      ticketPrice: ticketPriceInputRef.current.value,
      type: typeInputRef.current.value,
    };

    try {
      const response = await EventsService.updateEvent(eventId, event);

      // Handle the response as needed
      if (response) {
        // Handle success
        showToast("Event updated successfully", "success");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        showToast("Failed to update event", "error");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while updating the event:", error);
      showToast("Error: An error occurred while updating the event", "error");
    }
  };
  return (
    <>
      {props.isEditEventModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isEditEventModalOpen}
            onClose={props.handleEditModalClose}
            backdrop={props.isEditEventModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Edit Event
            </Modal.Header>
            <Modal.Body>
              <div className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Enter name"
                    id="name"
                    type="text"
                    defaultValue={props.event.name}
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
                    defaultValue={props.event.description}
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
                      defaultValue={props.event.dateOfEvent}
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
                      defaultValue={props.event.ticketPrice}
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
                      type="text"
                      placeholder="Enter type"
                      defaultValue={props.event.type}
                      ref={typeInputRef}
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

export default EditEventForm;
