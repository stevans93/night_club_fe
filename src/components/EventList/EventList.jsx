import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import EventsService from "../../services/eventsService";

const EventList = (props) => {
  const [events, setEvents] = useState(null);

  const { clubId } = useParams();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { params } = props;

        console.log(params);
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
      {events &&
        events.map((card) => {
          return <Card key={card._id} card={card} button={props.button} />;
        })}
    </div>
  );
};

export default EventList;
