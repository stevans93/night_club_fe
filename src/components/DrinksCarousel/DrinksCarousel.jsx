import { FaGlassMartiniAlt } from "react-icons/fa";

export default function DrinksCarousel(props) {
  return (
    <div className="flex h-72 w-full mt-10">
      <div className="flex h-44 w-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white gap-2">
        <button
          className="flex flex-col items-center justify-center gap-3 h-full w-1/5 bg-white"
          onClick={() => {
            props.onClick("Soft Drinks");
          }}
        >
          <FaGlassMartiniAlt className="h-10 w-10" />
          <span>Soft Drinks</span>
        </button>
        <button
          className="flex flex-col items-center justify-center gap-3 h-full w-1/5 bg-white"
          onClick={() => {
            props.onClick("Cocktails");
          }}
        >
          <FaGlassMartiniAlt className="h-10 w-10" />
          <span>Cocktails</span>
        </button>
        <button
          className="flex flex-col items-center justify-center gap-3 h-full w-1/5 bg-white"
          onClick={() => {
            props.onClick("Vodka");
          }}
        >
          <FaGlassMartiniAlt className="h-10 w-10" />
          <span>Vodka</span>
        </button>
        <button
          className="flex flex-col items-center justify-center gap-3 h-full w-1/5 bg-white"
          onClick={() => {
            props.onClick("Wine");
          }}
        >
          <FaGlassMartiniAlt className="h-10 w-10" />
          <span>Wine</span>
        </button>
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"></div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"></div>
    </div>
  );
}
