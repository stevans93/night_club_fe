import React from "react";
import ClubList from "../../components/ClubList/ClubList";
import InputForm from "../../components/InputForm/InputForm";

const Clubs = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white from-30% to-30% to-[#F0F4F9]">
      <div className="flex flex-col max-w-screen-xl sm:px-20 xs:px-5">
        <span className="text-[#475DDB] font-bold mt-6 mb-4">
          IZABERI GDE IZLAZIS
        </span>
        <h3 className="mb-10 text-5xl font-bold dark:text-white">Ugostiteljski objekti</h3>
        <InputForm />
        <ClubList />
      </div>
      <button className="mt-10 inline-flex items-center px-32 py-2 text-sm font-medium text-center text-white bg-[#475DDB] rounded-full hover:bg-[#475DDB] focus:ring-4 focus:outline-none focus:ring-[#475DDB] dark:bg-[#475DDB] dark:hover:bg-[#475DDB] dark:focus:ring-[#475DDB]">
        Vidi jos
      </button>
    </div>
  );
};

export default Clubs;
