import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClubsService from "../../../../services/clubsService";

function WorkingHours() {
  const [hours, setHours] = useState();

  const { clubId } = useParams();

  useEffect(() => {
    const fetchHours = async () => {
      try {
        const hoursData = await ClubsService.getWorkingHours(clubId);
        if (hoursData) {
          setHours(hoursData.workingHours);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching hours:", error);
      }
    };
    if (clubId) {
      fetchHours();
    }else{
      setHours(null);
    }
  }, [clubId]);

  return (
    <>
      {hours && (
        <div className="flex flex-col gap-3">
          {hours.map((item) => {
            const fromToSpans = (
              <>
                <span>{item.from}</span>
                <span>-</span>
                <span>{item.to}</span>
              </>
            );
            return (
              <div key={item._id} className="flex justify-between">
                <span>{item.day}</span>
                <div className="flex w-6/12 gap-4">
                  {item.closed && <span>Closed</span>}
                  {!item.closed && item.alwaysOpen && <span>24h</span>}
                  {!item.closed && !item.alwaysOpen && fromToSpans}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default WorkingHours;
