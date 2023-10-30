import { useState, useEffect, useRef } from "react";
import ReactSwitch from "react-switch";
import ClubsService from "../../../services/clubsService";

const DashboardAvaliableDays = () => {
  const [hours, setHours] = useState();

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;

  const handleChange = (item) => {
    setHours((hours) =>
      hours.map((i) => {
        if (i._id === item._id) {
          return item;
        } else {
          return i;
        }
      })
    );
  };

  const handleConfirm = async (event) => {
    event.preventDefault();
    await ClubsService.updateWorkingHours(hours);
    window.location.reload();
  };

  useEffect(() => {
    const fetchHours = async () => {
      try {
        const hoursData = await ClubsService.getDashboardWorkingHours();
        if (hoursData) {
          setHours(hoursData.workingHours);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching hours:", error);
      }
    };

    fetchHours();
  }, [clubId]);

  return (
    <form className="flex flex-col w-2/5 bg-white ml-10 mt-4 rounded-lg shadow-lg">
      <div className="flex w-full mt-4 border-b-2 h-fit py-2">
        <span className="flex w-1/4 ml-10 text-center">days</span>
        <span className="flex w-1/4">start time</span>
        <span className="flex w-1/4">end time</span>
        <span>open 24 hours</span>
      </div>
      {hours && (
        <div className="flex flex-col gap-3">
          {hours.map((item, i) => {
            return (
              <div key={i} className="flex items-center ml-10 mt-4">
                <div className="flex gap-3 w-1/4">
                  <input
                    checked={!item.closed}
                    onChange={() => {
                      const newItem = { ...item, closed: !item.closed };
                      handleChange(newItem);
                    }}
                    type="checkbox"
                  />
                  <label htmlFor="">{item.day}</label>
                </div>
                <div className="flex flex-col w-1/4 mr-10">
                  <input
                    className="border-2 py-2 px-2 rounded-lg"
                    type="time"
                    disabled={item.closed}
                    onChange={(event) => {
                      const newItem = { ...item, from: event.target.value };
                      handleChange(newItem);
                    }}
                    defaultValue={item.from}
                  />
                </div>
                <div className="flex flex-col w-1/4 mr-10">
                  <input
                    className="border-2 py-2 px-2 rounded-lg"
                    type="time"
                    disabled={item.closed}
                    defaultValue={item.to}
                    onChange={(event) => {
                      const newItem = { ...item, to: event.target.value };
                      handleChange(newItem);
                    }}
                  />
                </div>
                <ReactSwitch
                  checked={item.alwaysOpen}
                  disabled={item.closed}
                  onChange={() => {
                    const newItem = { ...item, alwaysOpen: !item.alwaysOpen };
                    handleChange(newItem);
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
      <button
        onClick={handleConfirm}
        className="flex w-fit self-center mt-10 py-2 px-16 bg-primary text-white rounded-lg"
      >
        Confirm
      </button>
    </form>
  );
};

export default DashboardAvaliableDays;
