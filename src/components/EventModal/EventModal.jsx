import "../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { BsCalendar4 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
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
            <Modal.Body className="m-0 p-0 lg:min-h-400 h-fit">
              <div className="flex sm:h-full xs:h-fit reservation xs:flex-col lg:flex-row">
                <div className="flex xs:h-fit lg:min-h-400 eventImg lg:w-45 xs:w-full xs:order-2 lg:order-1">
                  <img className="flex w-full" src={props.event.image} alt="" />
                </div>
                <div className="flex flex-col xs:items-center lg:flex-1 px-6 relative xs:order-1 lg:order-2 xs:gap-4 xl:gap-0 eventBody">
                  <span className="flex text-2xl font-bold lg:self-start">
                    {props.event.title}
                  </span>
                  <span className="flex lg:mt-6 lg:mb-6 lg:self-start">
                    {props.event.description}
                  </span>
                  <div className="flex xl:gap-8 w-full xs:flex-col xs:items-center xs:gap-10 md:flex-row">
                    <div className="flex gap-4 sm:flex-1 items-center w-fit">
                      <BsCalendar4 className="text-primary" size="2rem" />
                      <div className="flex xs:flex-col gap-2">
                        <span>Datum i Vreme: {""}</span>
                        <span>
                          {new Date(
                            props.event.dateOfEvent
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4 sm:flex-1 items-center w-fit">
                      <IoLocationOutline className="text-primary" size="2rem" />
                      <div className="flex flex-col gap-2">
                        <span>Tip dogadjaja: </span>
                        <span>{props.event.type}</span>
                      </div>
                    </div>
                    <div className="flex gap-4 sm:flex-1 items-center w-fit">
                      <IoLocationOutline className="text-primary" size="2rem" />
                      <div className="flex flex-col gap-2">
                        <span>Lokacija: </span>
                        <span>{props.event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 items-center self-center lg:mt-10  rounded-3xl lg:py-10 gap-6 lg:absolute lg:bottom-0">
                    <span className="font-bold text-2xl">
                      {props.event.ticketPrice}
                    </span>
                    <button
                      onClick={() => {
                        navigate(`/club/${props.event.clubId}`, {
                          state: { event: props.event },
                        });
                      }}
                      className="bg-primary text-white py-2 px-10 rounded-lg xs:mb-5"
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
