import React from "react";
import Card from "../../components/Card/Card";
import InputForm from "../../components/InputForm/InputForm";

const premium = [
  {
    id: 1,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
  {
    id: 2,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
  {
    id: 3,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
  {
    id: 4,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
  {
    id: 5,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
  {
    id: 6,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
];

const regular = [
  {
    id: 1,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
  {
    id: 2,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
  {
    id: 3,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
  {
    id: 4,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
  {
    id: 5,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
  {
    id: 6,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
];

const Clubs = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white from-30% to-30% to-[#F0F4F9]">
      <div className="flex flex-col max-w-screen-xl sm:px-20 xs:px-5">
        <span className="text-[#475DDB] font-bold mt-6 mb-4">
          IZABERI GDE IZLAZIS
        </span>
        <h3 className="mb-10 text-5xl font-bold dark:text-white">Ugostiteljski objekti</h3>
        <InputForm />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {premium.map((card) => {
            return <Card key={card.id} card={card} button="Istrazi" />;
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {regular.map((card) => {
            return <Card key={card.id} card={card} button="Istrazi" />;
          })}
        </div>
      </div>
      <button className="mt-10 inline-flex items-center px-32 py-2 text-sm font-medium text-center text-white bg-[#475DDB] rounded-full hover:bg-[#475DDB] focus:ring-4 focus:outline-none focus:ring-[#475DDB] dark:bg-[#475DDB] dark:hover:bg-[#475DDB] dark:focus:ring-[#475DDB]">
        Vidi jos
      </button>
    </div>
  );
};

export default Clubs;
