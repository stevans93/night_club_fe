import { FaGlassMartiniAlt } from "react-icons/fa";

export default function DrinksCarousel(props) {

  const fetchItems = async (value) => {
    await props.fetchProducts(value);
    props.showItems(value);
  };

  return (
    <div className="flex h-fit w-full mt-10">
      <div className="flex h-44 w-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white gap-2">
        {props.drinkCategories.map((category) => {
          return (
            <button
              key={category._id}
              className="flex flex-col items-center justify-center gap-3 h-full w-1/5 bg-white"
              onClick={() => fetchItems(category.name)}
            >
              <FaGlassMartiniAlt className="h-10 w-10" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
