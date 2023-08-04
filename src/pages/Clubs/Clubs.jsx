import React from "react";
import Card from "../../components/Card/Card";

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
    <div className="flex justify-center bg-gradient-to-b from-white from-30% to-30% to-[#F0F4F9]">
      <div className="max-w-screen-xl px-20">
        <h3 class="mb-6 text-3xl font-bold dark:text-white">
          Premijum Mesta
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {premium.map((card) => {
            return <Card card={card} />;
          })}
        </div>
        <h3 class="mb-6 text-3xl font-bold dark:text-white">
          Regularna Mesta
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {regular.map((card) => {
            return <Card card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
