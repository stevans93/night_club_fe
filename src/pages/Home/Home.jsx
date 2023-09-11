import { Link } from "react-router-dom";
import pathIcon from "../../assets/path.svg";
import clocklIcon from "../../assets/clock.svg";
import surfaceIcon from "../../assets/surface.svg";
import CarouselText from "../../components/CarouselText/CarouselText";
import EventList from "../../components/EventList/EventList";
import ClubList from "../../components/ClubList/ClubList";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import { useState } from "react";

function Home() {
  //events
  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: 6,
  });
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfEvents, setNumberOfEvents] = useState();

  //regular places
  const [selectedRegularParams, setSelectedRegularParams] = useState({
    pageNumber: 1,
    pageSize: 6,
    bannerImage: "Regular",
  });
  const [numberOfRegularPages, setNumberOfRegularPages] = useState(1);
  const [numberOfRegularClubs, setNumberOfRegularClubs] = useState();

  //premium places
  const [selectedPremiumParams, setSelectedPremiumParams] = useState({
    pageNumber: 1,
    pageSize: 6,
    bannerImage: "Premijum",
  });
  const [numberOfPremiumPages, setNumberOfPremiumPages] = useState(1);
  const [numberOfPremiumClubs, setNumberOfPremiumClubs] = useState();

  const handleNextPage = (value) => {
    if (value === "premium") {
      setSelectedPremiumParams((selectedPremiumParams) => ({
        ...selectedPremiumParams,
        pageNumber: selectedPremiumParams.pageNumber + 1,
      }));
    }

    if (value === "regular") {
      setSelectedRegularParams((selectedRegularParams) => ({
        ...selectedRegularParams,
        pageNumber: selectedRegularParams.pageNumber + 1,
      }));
    }

    if (value === "events") {
      setSelectedParams((selectedParams) => ({
        ...selectedParams,
        pageNumber: selectedParams.pageNumber + 1,
      }));
    }
  };

  const handlePrevPage = (value) => {
    if (value === "premium") {
      setSelectedPremiumParams((selectedPremiumParams) => ({
        ...selectedPremiumParams,
        pageNumber: selectedPremiumParams.pageNumber - 1,
      }));
    }

    if (value === "regular") {
      setSelectedRegularParams((selectedRegularParams) => ({
        ...selectedRegularParams,
        pageNumber: selectedRegularParams.pageNumber - 1,
      }));
    }

    if (value === "events") {
      setSelectedParams((selectedParams) => ({
        ...selectedParams,
        pageNumber: selectedParams.pageNumber - 1,
      }));
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative xl:h-h700 sm:h-96 xs:h-80">
        <ImageCarousel />
        <CarouselText />
      </div>
      <div className="flex justify-center bg-[#F0F4F9] py-12">
        <div className="max-w-screen-xl lg:px-20 xs:px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">
              Premijum Mesta
            </h3>
            <div className="flex items-center">
              <Link className="mr-5">Vidi sve ({numberOfPremiumClubs})</Link>
              <button
                onClick={() => handlePrevPage("premium")}
                disabled={selectedPremiumParams.pageNumber === 1}
                type="button"
                className="rotate-180 text-primary bg-white hover:bg-primary hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-primary"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
              <button
                onClick={() => handleNextPage("premium")}
                disabled={
                  selectedPremiumParams.pageNumber === numberOfPremiumPages
                }
                type="button"
                className="text-primary bg-white hover:bg-primary hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-primary"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
          <ClubList
            params={selectedPremiumParams}
            setNumberOfPages={setNumberOfPremiumPages}
            setNumberOfClubs={setNumberOfPremiumClubs}
            bannerImage="Premijum Mesto"
            button="Istrazi"
          />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <div className="max-w-screen-xl lg:px-20 xs:px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">
              Regularna Mesta
            </h3>
            <div className="flex items-center">
              <Link className="mr-5">Vidi sve ({numberOfRegularClubs})</Link>
              <button
                onClick={() => handlePrevPage("regular")}
                disabled={selectedRegularParams.pageNumber === 1}
                type="button"
                className="rotate-180 text-primary bg-[#F0F4F9] hover:bg-primary hover:text-[#F0F4F9] font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-[#F0F4F9] dark:hover:bg-primary"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
              <button
                onClick={() => handleNextPage("regular")}
                disabled={
                  selectedRegularParams.pageNumber === numberOfRegularPages
                }
                type="button"
                className="text-primary bg-[#F0F4F9] hover:bg-primary hover:text-[#F0F4F9] font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-[#F0F4F9] dark:hover:bg-primary"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
          <ClubList
            params={selectedRegularParams}
            setNumberOfPages={setNumberOfRegularPages}
            setNumberOfClubs={setNumberOfRegularClubs}
            bannerImage="Regularno Mesto"
            button="Istrazi"
          />
        </div>
      </div>
      <div className="flex justify-center bg-[#F0F4F9] py-12">
        <div className="max-w-screen-xl lg:px-20 xs:px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">
              Dogadjaji
            </h3>
            <div className="flex items-center">
              <Link to="/events" className="mr-5">
                Vidi sve ({numberOfEvents})
              </Link>
              <button
                onClick={handlePrevPage}
                disabled={selectedParams.pageNumber === 1}
                type="button"
                className="rotate-180 text-primary bg-white hover:bg-primary hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-primary"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
              <button
                onClick={handleNextPage}
                disabled={selectedParams.pageNumber === numberOfPages}
                type="button"
                className="text-primary bg-white hover:bg-primary hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-primary"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
          <EventList
            params={selectedParams}
            setNumberOfPages={setNumberOfPages}
            setNumberOfEvents={setNumberOfEvents}
            button="Bookiraj"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center max-w-screen-xl px-20 py-20">
          <h2 className="mb-6 text-3xl font-bold datext-blackrk:text-white text-center">
            Zasto <span className="text-primary">Izabrati nas</span>
          </h2>
          <div className="flex md:flex-row xs:flex-col gap-5">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-32 h-32 rounded-full bg-primary mb-5">
                <img className="w-18 h-18" src={clocklIcon} alt="" />
              </div>
              <h6 className="text-lg font-bold text-black mb-3">
                Izaberite vreme
              </h6>
              <p className="leading-6 text-center text-sm font-light text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis vero sit facilis, laborum corrupti sunt quaerat
                aperiam voluptas placeat similique modi sed ut a in distinctio
                atque earum consequatur porro?
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-32 h-32 rounded-full bg-primary mb-5">
                <img
                  className="w-18 h-18 bg-primary"
                  src={surfaceIcon}
                  alt=""
                />
              </div>
              <h6 className="text-lg font-bold text-black mb-3">
                Rezervisete odmah
              </h6>
              <p className="leading-6 text-center text-sm font-light text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis vero sit facilis, laborum corrupti sunt quaerat
                aperiam voluptas placeat similique modi sed ut a in distinctio
                atque earum consequatur porro?
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-32 h-32 rounded-full bg-primary mb-5">
                <img className="w-18 h-18 bg-primary" src={pathIcon} alt="" />
              </div>
              <h6 className="text-lg font-bold text-black mb-3">
                100% bezbedno
              </h6>
              <p className="leading-6 text-center text-sm font-light text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis vero sit facilis, laborum corrupti sunt quaerat
                aperiam voluptas placeat similique modi sed ut a in distinctio
                atque earum consequatur porro?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
