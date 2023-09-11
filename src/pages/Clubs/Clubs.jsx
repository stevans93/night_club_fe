import React from "react";
import { useState } from "react";
import ClubList from "../../components/ClubList/ClubList";
import InputForm from "../../components/InputForm/InputForm";

const Clubs = () => {
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

  const handleChangeName = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      name: value,
    }));
  };

  const handleChangeLocation = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      location: value,
    }));
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white from-30% to-30% to-[#F0F4F9]">
      <div className="flex flex-col max-w-screen-xl sm:px-20 xs:px-5">
        <span className="text-primary font-bold mt-6 mb-4">
          IZABERI GDE IZLAZIS
        </span>
        <h3 className="mb-10 text-5xl font-bold dark:text-white">
          Ugostiteljski objekti
        </h3>
        <InputForm
          handleChangeName={handleChangeName}
          handleChangeLocation={handleChangeLocation}
        />
        <ClubList params={selectedParams} button="Istrazi" />
      </div>
      <button
        onClick={handleLoadMore}
        className="mt-10 inline-flex items-center px-32 py-2 text-sm font-medium text-center text-white bg-primary rounded-full hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
      >
        Vidi jos
      </button>
    </div>
  );
};

export default Clubs;
