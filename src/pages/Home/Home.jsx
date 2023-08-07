import Card from "../../components/Card/Card";
import pathIcon from "../../assets/path.svg";
import clocklIcon from "../../assets/clock.svg";
import surfaceIcon from "../../assets/surface.svg";

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

function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center bg-[#F0F4F9] py-12">
        <div className="max-w-screen-xl px-20">
          <h3 class="mb-6 text-3xl font-bold text-black">
            Premijum Mesta
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {premium.map((card) => {
              return <Card card={card} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <div className="max-w-screen-xl px-20">
          <h3 class="mb-6 text-3xl font-bold text-black">
            Regularna Mesta
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {regular.map((card) => {
              return <Card card={card} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#F0F4F9] py-12">
        <div className="max-w-screen-xl px-20">
          <h3 class="mb-6 text-3xl font-bold text-black">Dogadjaji</h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {events.map((card) => {
              return <Card card={card} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center max-w-screen-xl px-20 py-20">
          <h2 class="mb-6 text-3xl font-bold datext-blackrk:text-white">
            Zasto <span className="text-[#475DDB]">Izabrati nas</span>
          </h2>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-32 h-32 rounded-full bg-[#475DDB] mb-5">
                <img className="w-18 h-18" src={clocklIcon} alt="" />
              </div>
              <h6 class="text-lg font-bold text-black mb-3">
                Izaberite vreme
              </h6>
              <p class="text-center text-sm font-light text-gray-500 dark:text-gray-400">
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
              <h6 class="text-lg font-bold text-black mb-3">
                Rezervisete odmah
              </h6>
              <p class="text-center text-sm font-light text-gray-500 dark:text-gray-400">
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
              <h6 class="text-lg font-bold text-black mb-3">
                100% bezbedno
              </h6>
              <p class="text-center text-sm font-light text-gray-500 dark:text-gray-400">
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
