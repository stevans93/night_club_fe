import { Carousel } from "flowbite-react";

export default function ImageCarousel() {
  return (
    <div className="h-full">
      <Carousel slideInterval={5000}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xs:h-full sm:h-auto"
            alt="..."
            src="../../../public/assets/party-image.jpg"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xs:h-full sm:h-auto"
            alt="..."
            src="../../../public/assets/party-image-2.jpg"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xs:h-full sm:h-auto"
            alt="..."
            src="../../../public/assets/party-image-3.avif"
          />
        </div>
      </Carousel>
    </div>
  );
}
