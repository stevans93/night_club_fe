import "../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { BsCalendar4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EventModal = (props) => {
  const navigate = useNavigate();
  return (
    <>
      {props.showEventModal && (
        <div className="flex text-center reservation w-full">
          <Modal
            size="full"
            open={props.showEventModal}
            onClose={props.handleCloseEventModal}
            backdrop={props.showEventModal}
          >
            <Modal.Body className="m-0 p-0 min-h-400 h-fit">
              <div className="flex h-full reservation">
                <div className="flex min-h-400 eventImg">
                  <img className="flex w-full" src={props.event.image} alt="" />
                </div>
                <div className="flex flex-col flex-1 px-6 relative eventBody">
                  <span className="text-2xl font-bold">{props.event.title}</span>
                  <span className="mt-6 mb-6">{props.event.description}</span>
                  <div className="flex">
                    <div className="flex gap-4 flex-1 px-4 items-center eventTime">
                      <BsCalendar4 className="text-primary" size="2rem" />
                      <div className="flex flex-col gap-2">
                        <span>Datum i Vreme</span>
                        <span>
                          {new Date(
                            props.event.dateOfEvent
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 items-center self-center mt-10  rounded-3xl py-10 gap-6 absolute bottom-0">
                    <span className="font-bold text-2xl eventPrice">
                      {props.event.ticketPrice}.rsd
                    </span>
                    <button
                      onClick={() => {
                        navigate(`/club/${props.event.clubId}`, { state: { event: props.event } });
                      }}
                      className="bg-primary text-white py-2 px-10 rounded-lg eventBtn"
                    >
                      Rezerviši
                    </button>
                  </div>
                  <Button
                    className="absolute top-0 right-0 eventExit"
                    onClick={props.handleCloseEventModal}
                    appearance="subtle"
                  >
                    X
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

export default EventModal;
