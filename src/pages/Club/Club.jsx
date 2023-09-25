import ClubInputForm from "../../components/ClubInputForm/ClubInputForm";
import ContactMap from "../../components/ContactComponents/ContactMap/ContactMap";
import DrinkMenu from "../../components/DrinkMenu/DrinkMenu";
import EventList from "../../components/EventList/EventList";
import { useState } from "react";

const Club = () => {
  const [selectedParams, setSelectedParams] = useState({});

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

  const handleChangeDate = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      date: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col bg-[#F0F4F9]">
        <div className="flex h-h550 items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className="w-full h-full object-cover"
            alt="..."
            src="../../../public/assets/party-image.jpg"
          />
        </div>
        <div className="flex flex-col items-center self-center w-full max-w-5xl bg-[#F0F4F9] mt-16 mb-16">
          <h2 className="text-3xl">
            <span className="font-bold text-3xl underline decoration-primary">
              Drinks
            </span>{" "}
            Category
          </h2>
          <DrinkMenu clubId="64ee53cb2744ff39426bddff" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-screen-xl sm:px-20 xs:px-5">
          <span className="text-primary font-bold mt-6 mb-4">
            IZABERI DOGADJAJ
          </span>
          <h3 className="mb-10 text-5xl font-bold dark:text-white">
            Dogadjaji
          </h3>
          <ClubInputForm
            handleChangIme={handleChangIme}
            handleChangTip={handleChangTip}
            handleChangeDate={handleChangeDate}
          />
          <EventList button="Bookiraj" params={selectedParams} />
        </div>
      </div>
      <ContactMap bg="#F0F4F9" />
    </>
  );
};

export default Club;
