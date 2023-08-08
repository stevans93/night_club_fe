import React from "react";
import Card from "../../components/Card/Card";
import InputForm from "../../components/InputForm/InputForm";

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
  {
    id: 5,
    title: "Suncanje - Sunday",
    description: "pocinje od 14:00",
    location: "Belgarde, Serbia",
    badge: "event",
  },
  {
    id: 6,
    title: "Suncanje - Sunday",
    description: "pocinje od 14:00",
    location: "Belgarde, Serbia",
    badge: "event",
  },
];

const Events = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white from-30% to-30% to-[#F0F4F9]">
      <div className="flex flex-col max-w-screen-xl sm:px-20 xs:px-5">
        <span className="text-[#475DDB] font-bold mt-6 mb-4">
          IZABERI DOGADJAJ
        </span>
        <h3 className="mb-10 text-5xl font-bold dark:text-white">Dogadjaji</h3>
        <InputForm />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {events.map((card) => {
            return <Card key={card.id} card={card} button="Bookiraj" />;
          })}
        </div>
      </div>
      <button className="mt-10 inline-flex items-center px-32 py-2 text-sm font-medium text-center text-white bg-[#475DDB] rounded-full hover:bg-[#475DDB] focus:ring-4 focus:outline-none focus:ring-[#475DDB] dark:bg-[#475DDB] dark:hover:bg-[#475DDB] dark:focus:ring-[#475DDB]">
        Vidi jos
      </button>
    </div>
  );
};

export default Events;
