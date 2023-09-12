import { LuBellRing } from "react-icons/lu";
import { GoEye, GoDash } from "react-icons/go";

const DashboardTablesBody = () => {
  return (
    <div className="flex flex-wrap mt-10 gap-3 w-full bg-white rounded-xl px-3">
      <button className="flex flex-col h-60 w-1/6 bg-red-500 rounded-lg items-center mb-5">
        <LuBellRing className="mt-10 text-white" size="5rem" />
        <span className="text-white">Have a new Order</span>
        <span className="text-white text-2xl py-2">Table - 1</span>
        <GoEye className="text-white" size='1.5rem' />
        <span className="text-white pb-2">view order</span>
      </button>
      <button className="flex flex-col h-60 w-1/6 bg-primary rounded-lg items-center mb-5">
        <GoDash className="mt-10 text-white" size='5rem' />
        <span className="text-white">Table is empty</span>
        <span className="text-white text-2xl py-2">Table - 2</span>
      </button>
      <button className="flex flex-col h-60 w-1/6 bg-primary rounded-lg items-center mb-5">
        <GoDash className="mt-10 text-white" size='5rem' />
        <span className="text-white">Table is empty</span>
        <span className="text-white text-2xl py-2">Table - 2</span>
      </button>
      <button className="flex flex-col h-60 w-1/6 bg-primary rounded-lg items-center mb-5">
        <GoDash className="mt-10 text-white" size='5rem' />
        <span className="text-white">Table is empty</span>
        <span className="text-white text-2xl py-2">Table - 2</span>
      </button>
      <button className="flex flex-col h-60 w-1/6 bg-primary rounded-lg items-center mb-5">
        <GoDash className="mt-10 text-white" size='5rem' />
        <span className="text-white">Table is empty</span>
        <span className="text-white text-2xl py-2">Table - 2</span>
      </button>
      <button className="flex flex-col h-60 w-1/6 bg-primary rounded-lg items-center mb-5">
        <GoDash className="mt-10 text-white" size='5rem' />
        <span className="text-white">Table is empty</span>
        <span className="text-white text-2xl py-2">Table - 2</span>
      </button>
      <button className="flex flex-col h-60 w-1/6 bg-primary rounded-lg items-center mb-5">
        <GoDash className="mt-10 text-white" size='5rem' />
        <span className="text-white">Table is empty</span>
        <span className="text-white text-2xl py-2">Table - 2</span>
      </button>
      <button className="flex flex-col h-60 w-1/6 bg-primary rounded-lg items-center mb-5">
        <GoDash className="mt-10 text-white" size='5rem' />
        <span className="text-white">Table is empty</span>
        <span className="text-white text-2xl py-2">Table - 2</span>
      </button>
      <button className="flex flex-col h-60 w-1/6 bg-primary rounded-lg items-center mb-5">
        <GoDash className="mt-10 text-white" size='5rem' />
        <span className="text-white">Table is empty</span>
        <span className="text-white text-2xl py-2">Table - 2</span>
      </button>
      <button className="flex flex-col h-60 w-1/6 bg-primary rounded-lg items-center mb-5">
        <GoDash className="mt-10 text-white" size='5rem' />
        <span className="text-white">Table is empty</span>
        <span className="text-white text-2xl py-2">Table - 2</span>
      </button>
    </div>
  );
};

export default DashboardTablesBody;
