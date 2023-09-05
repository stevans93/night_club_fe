import React from "react";
import { useState } from "react";
import EventList from "../../components/EventList/EventList";
import InputForm from "../../components/InputForm/InputForm";

const Events = () => {
  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: 6,
  });

  const handleLoadMore = () => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageSize: selectedParams.pageSize + 6,
    }));
  };

  const handleChangIme = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      ime: value,
    }));
  };

  const handleChangTip = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      tip: value,
    }));
  };

  const handleChangDate = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      date: value,
    }));
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white from-30% to-30% to-[#F0F4F9]">
      <div className="flex flex-col max-w-screen-xl sm:px-20 xs:px-5">
        <span className="text-[#475DDB] font-bold mt-6 mb-4">
          IZABERI DOGADJAJ
        </span>
        <h3 className="mb-10 text-5xl font-bold dark:text-white">Dogadjaji</h3>
        <InputForm
          handleChangIme={handleChangIme}
          handleChangTip={handleChangTip}
          handleChangDate={handleChangDate}
        />
        <EventList
          params={selectedParams}
          button="Bookiraj"
        />
      </div>
      <button
        onClick={handleLoadMore}
        className="mt-10 inline-flex items-center px-32 py-2 text-sm font-medium text-center text-white bg-[#475DDB] rounded-full hover:bg-[#475DDB] focus:ring-4 focus:outline-none focus:ring-[#475DDB] dark:bg-[#475DDB] dark:hover:bg-[#475DDB] dark:focus:ring-[#475DDB]"
      >
        Vidi jos
      </button>
    </div>
  );
};

export default Events;
