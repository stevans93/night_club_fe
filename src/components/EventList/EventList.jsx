import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";

const EventList = (props) => {
  const [events, setEvents] = useState(null);

  const { clubId } = useParams();

  useEffect(() => {
    const fetchEvents = async () => {
      let queryString = ``;
      if (clubId) {
        queryString += `?clubId=${clubId}`;
      }
      if (props.params) {
        for (const [index, [key, value]] of Object.entries(
          props.params
        ).entries()) {
          if (index === 0 && !clubId) {
            queryString += `?${key}=${value}`;
          } else {
            queryString += `&${key}=${value}`;
          }
        }
      }
      console.log(queryString);
      const response = await fetch(
        `http://localhost:4000/api/event/allEvents/${queryString}`
      );
      const json = await response.json();

      if (response.ok) {
        setEvents(json.events);
        if (props.setNumberOfPages) {
          props.setNumberOfPages(json.numberOfPages);
        }
        if (props.setNumberOfEvents) {
          props.setNumberOfEvents(json.numberOfEvents);
        }
      }
    };

    fetchEvents();
  }, [props.date, props.params]);

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
