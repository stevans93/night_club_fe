import React from "react";
import Card from "../../components/Card/Card";

const events = [
  {
    id: 1,
    title: "Suncanje - Sunday",
    description: "pocinje od 14:00",
    location: "Belgarde, Serbia",
    badge: "event",
  },
  {
    id: 2,
    title: "Suncanje - Sunday",
    description: "pocinje od 14:00",
    location: "Belgarde, Serbia",
    badge: "event",
  },
  {
    id: 3,
    title: "Suncanje - Sunday",
    description: "pocinje od 14:00",
    location: "Belgarde, Serbia",
    badge: "event",
  },
  {
    id: 4,
    title: "Suncanje - Sunday",
    description: "pocinje od 14:00",
    location: "Belgarde, Serbia",
    badge: "event",
  },
];

const Events = () => {
  return (
    <div className="flex justify-center bg-gradient-to-b from-white from-30% to-30% to-[#F0F4F9]">
      <div className="max-w-screen-xl px-20">
        <h3 class="mb-6 text-3xl font-bold dark:text-white">Dogadjaji</h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {events.map((card) => {
            return <Card card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
