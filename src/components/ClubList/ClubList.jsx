import { useState, useEffect} from 'react';
import Card from '../Card/Card';

const ClubList = (props) => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:4000/api/club/all");
      const json = await response.json();

      if (response.ok) {
        setEvents(json);
      }

      if(props.bannerImage === 'Premium Mesto') {
        setEvents (json.filter(x => x.bannerImage === 'Premium Mesto'))
      }

      if(props.bannerImage === 'Regularno Mesto') {
        setEvents (json.filter(x => x.bannerImage === 'Regularno Mesto'))
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {events &&
        events.map((card) => {
          return <Card key={card._id} card={card} button={props.button} />;
        })}
    </div>
  );
};

export default ClubList;
