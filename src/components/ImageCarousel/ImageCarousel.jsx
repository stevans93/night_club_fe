import { Carousel } from "flowbite-react";

export default function ImageCarousel(props) {
  return (
    <div className="h-full">
      <Carousel slideInterval={5000} className="z-0">
        {props.images
          .filter((x) => x.link !== "")
          .map((image, index) => {
            return (
              <div
                key={index}
                className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
              >
                <img
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xs:h-full"
                  alt="..."
                  src={image.link}
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}
