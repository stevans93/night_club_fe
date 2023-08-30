import { Carousel } from "flowbite-react";
import { FaGlassMartiniAlt } from "react-icons/fa";

export default function DrinksCarousel() {
  return (
    <div className="flex h-72 w-full">
      <Carousel slideInterval={10000000} indicators="none">
        <div className="flex h-44 items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white gap-2">
          <div className="flex flex-col items-center justify-center gap-3 h-full w-1/5 bg-white">
            <FaGlassMartiniAlt className="h-10 w-10" />
            <span>Soft Drinks</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 h-full w-1/5 bg-white">
            <FaGlassMartiniAlt className="h-10 w-10" />
            <span>Coctails</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 h-full w-1/5 bg-white">
            <FaGlassMartiniAlt className="h-10 w-10" />
            <span>Vodka</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 h-full w-1/5 bg-white">
            <FaGlassMartiniAlt className="h-10 w-10" />
            <span>Wine</span>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"></div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"></div>
      </Carousel>
    </div>
  );
}
