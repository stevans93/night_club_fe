import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const EventList = (props) => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:4000/api/event/allEvents");
      const json = await response.json();

      if (response.ok) {
        setEvents(json);
      }
    };

    fetchEvents();
  }, []);

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
