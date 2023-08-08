import { useState, useEffect } from "react";

const activeButtonStyle = "w-10 h-2 rounded-lg bg-[#475DDB]";
const inactiveButtonStyle = "w-2 h-2 rounded-full bg-white";

function ImageCarousel(props) {
  const [activeItem, setActiveItem] = useState({
    position: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => {
        const pos = (prev.position + 1) % props.items.length;
        return {
          position: pos,
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full h-full"
      data-carousel="slide"
    >
      <div className="relative h-full overflow-hidden">
        {props.items.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                activeItem.position !== index && "hidden"
              } duration-700 ease-in-out h-full`}
              data-carousel-item
            >
              <img
                src={`../assets/${item.image}`}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xs:h-full sm:h-auto"
                alt="..."
              />
            </div>
          );
        })}
      </div>

      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 items-center">
        {props.items.map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              className={
                activeItem.position === index
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }
              onClick={() =>
                setActiveItem({
                  position: index,
                })
              }
              aria-current="true"
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ImageCarousel;
