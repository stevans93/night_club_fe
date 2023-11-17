import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import EventsService from "../../services/eventsService";
import EventModal from "../EventModal/EventModal";

const EventList = (props) => {
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  const { clubId } = useParams();

  const handleOpenEventModal = () => {
    setShowEventModal(true);
  };

  const handleCloseEventModal = () => {
    setShowEventModal(false);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { params } = props;

        const eventsData = await EventsService.getAllEvents(
          params.pageNumber,
          params.pageSize,
          clubId,
          params.date,
          params.name,
          params.location,
          params.type
        );

        setEvents(eventsData.events);

        if (props.setNumberOfPages) {
          props.setNumberOfPages(eventsData.numberOfPages);
        }
        if (props.setNumberOfEvents) {
          props.setNumberOfEvents(eventsData.numberOfEvents);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching events:", error);
      }
    };

    fetchEvents();
  }, [props.params]); // Include props.params as a dependency

  const fetchSingleEvent = async (eventId) => {
    try {
      const eventData = await EventsService.getSingleEvent(eventId);

      setEvent(eventData);
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while fetching events:", error);
    }
  };

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {events &&
          events.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                button={props.button}
                onClick={handleOpenEventModal}
                fetchSingleEvent={fetchSingleEvent}
              />
            );
          })}
      </div>
      {event && (
        <EventModal
          showEventModal={showEventModal}
          handleCloseEventModal={handleCloseEventModal}
          event={event}
        />
      )}
    </>
  );
};

export default EventList;
