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
  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: 3,
  });

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
              <Link className="mr-5">Vidi sve (50)</Link>
              <button
                type="button"
                className="rotate-180 text-[#475DDB] bg-white hover:bg-[#475DDB] hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#475DDB]"
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
                type="button"
                className="text-[#475DDB] bg-white hover:bg-[#475DDB] hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#475DDB]"
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
          <ClubList bannerImage="Premium Mesto" button="Istrazi" />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <div className="max-w-screen-xl lg:px-20 xs:px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">
              Regularna Mesta
            </h3>
            <div className="flex items-center">
              <Link className="mr-5">Vidi sve (50)</Link>
              <button
                type="button"
                className="rotate-180 text-[#475DDB] bg-[#F0F4F9] hover:bg-[#475DDB] hover:text-[#F0F4F9] font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-[#F0F4F9] dark:hover:bg-[#475DDB]"
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
                type="button"
                className="text-[#475DDB] bg-[#F0F4F9] hover:bg-[#475DDB] hover:text-[#F0F4F9] font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-[#F0F4F9] dark:hover:bg-[#475DDB]"
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
          <ClubList bannerImage="Regularno Mesto" button="Istrazi" />
        </div>
      </div>
      <div className="flex justify-center bg-[#F0F4F9] py-12">
        <div className="max-w-screen-xl lg:px-20 xs:px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">
              Dogadjaji
            </h3>
            <div className="flex items-center">
              <Link className="mr-5">Vidi sve (50)</Link>
              <button
                type="button"
                className="rotate-180 text-[#475DDB] bg-white hover:bg-[#475DDB] hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#475DDB]"
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
                type="button"
                className="text-[#475DDB] bg-white hover:bg-[#475DDB] hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#475DDB]"
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
          <EventList params={selectedParams} button="Bookiraj" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center max-w-screen-xl px-20 py-20">
          <h2 className="mb-6 text-3xl font-bold datext-blackrk:text-white text-center">
            Zasto <span className="text-[#475DDB]">Izabrati nas</span>
          </h2>
          <div className="flex md:flex-row xs:flex-col gap-5">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-32 h-32 rounded-full bg-[#475DDB] mb-5">
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
              <div className="flex justify-center items-center w-32 h-32 rounded-full bg-[#475DDB] mb-5">
                <img
                  className="w-18 h-18 bg-[#475DDB]"
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
              <div className="flex justify-center items-center w-32 h-32 rounded-full bg-[#475DDB] mb-5">
                <img className="w-18 h-18 bg-[#475DDB]" src={pathIcon} alt="" />
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
