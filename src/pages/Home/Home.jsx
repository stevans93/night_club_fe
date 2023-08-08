import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import pathIcon from "../../assets/path.svg";
import clocklIcon from "../../assets/clock.svg";
import surfaceIcon from "../../assets/surface.svg";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import CarouselText from "../../components/CarouselText/CarouselText";

const premium = [
  {
    id: 1,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
  {
    id: 2,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
  {
    id: 3,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
  {
    id: 4,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
  {
    id: 5,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
  {
    id: 6,
    title: "River",
    description: "Night Club",
    location: "Belgarde, Serbia",
    badge: "premium",
  },
];

const regular = [
  {
    id: 1,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
  {
    id: 2,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
  {
    id: 3,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
  {
    id: 4,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
  {
    id: 5,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
  {
    id: 6,
    title: "Porta",
    description: "Caffe Bar",
    location: "Kragujevac, Serbia",
    badge: undefined,
  },
];

const events = [
  {
    id: 1,
    title: "Suncanje - Sunday",
    description: "pocinje od 14:00",
    location: "Belgarde, Serbia",
    badge: "event",
  },
  {
    id: 2,
    title: "Suncanje - Sunday",
    description: "pocinje od 14:00",
    location: "Belgarde, Serbia",
    badge: "event",
  },
  {
    id: 3,
    title: "Suncanje - Sunday",
    description: "pocinje od 14:00",
    location: "Belgarde, Serbia",
    badge: "event",
  },
  {
    id: 4,
    title: "Suncanje - Sunday",
    description: "pocinje od 14:00",
    location: "Belgarde, Serbia",
    badge: "event",
  },
];

const carouselItems = [
  { image: "party-image.jpg", content: "" },
  { image: "party-image-2.jpg", content: "" },
  { image: "party-image-3.avif", content: "" },
];

function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative xl:h-h700 sm:h-96 xs:h-80">
        <ImageCarousel items={carouselItems} />
        <CarouselText />
      </div>
      <div className="flex justify-center bg-[#F0F4F9] py-12">
        <div className="max-w-screen-xl lg:px-20 xs:px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">Premijum Mesta</h3>
            <div className="flex items-center">
              <Link className="mr-5">Vidi sve (50)</Link>
              <button
                type="button"
                class="rotate-180 text-[#475DDB] bg-white hover:bg-[#475DDB] hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#475DDB]"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
              <button
                type="button"
                class="text-[#475DDB] bg-white hover:bg-[#475DDB] hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#475DDB]"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {premium.map((card) => {
              return <Card key={card.id} card={card} button='Istrazi' />;
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <div className="max-w-screen-xl lg:px-20 xs:px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">Regularna Mesta</h3>
            <div className="flex items-center">
              <Link className="mr-5">Vidi sve (50)</Link>
              <button
                type="button"
                class="rotate-180 text-[#475DDB] bg-[#F0F4F9] hover:bg-[#475DDB] hover:text-[#F0F4F9] font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-[#F0F4F9] dark:hover:bg-[#475DDB]"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
              <button
                type="button"
                class="text-[#475DDB] bg-[#F0F4F9] hover:bg-[#475DDB] hover:text-[#F0F4F9] font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-[#F0F4F9] dark:hover:bg-[#475DDB]"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {regular.map((card) => {
              return <Card key={card.id} card={card} button='Istrazi' />;
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#F0F4F9] py-12">
        <div className="max-w-screen-xl lg:px-20 xs:px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">Dogadjaji</h3>
            <div className="flex items-center">
              <Link className="mr-5">Vidi sve (50)</Link>
              <button
                type="button"
                class="rotate-180 text-[#475DDB] bg-white hover:bg-[#475DDB] hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#475DDB]"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
              <button
                type="button"
                class="text-[#475DDB] bg-white hover:bg-[#475DDB] hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#475DDB]"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {events.map((card) => {
              return <Card key={card.id} card={card} button='Istrazi' />;
            })}
          </div>
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
