import { useState, useEffect } from "react";
import Card from "../Card/Card";

const ClubList = (props) => {
  const [clubs, setClubs] = useState(null);

  useEffect(() => {
    const fetchClubs = async () => {
      let queryString = ``;
      if (props.params) {
        for (const [index, [key, value]] of Object.entries(
          props.params
        ).entries()) {
          if (index === 0) {
            queryString += `?${key}=${value}`;
          } else {
            queryString += `&${key}=${value}`;
          }
        }
      }
      const response = await fetch(`http://localhost:4000/api/club/all/${queryString}`);
      const json = await response.json();

      if (response.ok) {
        setClubs(json.clubs);
        if (props.setNumberOfPages) {
          props.setNumberOfPages(json.numberOfPages);
        }
        if (props.setNumberOfClubs) {
          props.setNumberOfClubs(json.numberOfClubs);
        }
      }

      if (props.bannerImage === "Premium Mesto") {
        setClubs(json.filter((x) => x.bannerImage === "Premium Mesto"));
      }

      if (props.bannerImage === "Regularno Mesto") {
        setClubs(json.filter((x) => x.bannerImage === "Regularno Mesto"));
      }
    };

    fetchClubs();
  }, [props.params]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {clubs &&
        clubs.map((card) => {
          return <Card key={card._id} card={card} button={props.button} />;
        })}
    </div>
  );
};

export default ClubList;
