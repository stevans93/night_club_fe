import { useState } from "react";
import ReactSwitch from "react-switch";

const DashboardAvaliableDays = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <form className="flex flex-col w-2/5 bg-white ml-10 mt-4 rounded-lg shadow-lg">
      <div className="flex justify-around gap-3 w-full mt-4 border-b-2 h-fit py-2">
        <span>days</span>
        <span>start time</span>
        <span>end time</span>
        <span>open 24 hours</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-around mt-4">
          <div className="flex gap-3">
            <input type="checkbox" />
            <label htmlFor="">Monday</label>
          </div>
          <div className="flex flex-col w-1/4">
            <input className="border-2 py-2 px-2 rounded-lg" type="time" />
          </div>
          <div className="flex flex-col w-1/4">
            <input className="border-2 py-2 px-2 rounded-lg" type="time" />
          </div>
          <ReactSwitch checked={checked} onChange={handleChange} />
        </div>
        <div className="flex items-center justify-around mt-4">
          <div className="flex gap-3">
            <input type="checkbox" />
            <label htmlFor="">Monday</label>
          </div>
          <div className="flex flex-col w-1/4">
            <input className="border-2 py-2 px-2 rounded-lg" type="time" />
          </div>
          <div className="flex flex-col w-1/4">
            <input className="border-2 py-2 px-2 rounded-lg" type="time" />
          </div>
          <ReactSwitch checked={checked} onChange={handleChange} />
        </div>
        <div className="flex items-center justify-around mt-4">
          <div className="flex gap-3">
            <input type="checkbox" />
            <label htmlFor="">Monday</label>
          </div>
          <div className="flex flex-col w-1/4">
            <input className="border-2 py-2 px-2 rounded-lg" type="time" />
          </div>
          <div className="flex flex-col w-1/4">
            <input className="border-2 py-2 px-2 rounded-lg" type="time" />
          </div>
          <ReactSwitch checked={checked} onChange={handleChange} />
        </div>
      </div>
    </form>
  );
};

export default DashboardAvaliableDays;
