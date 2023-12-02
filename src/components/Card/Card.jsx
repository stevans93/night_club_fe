import Badge from "../Badge/Badge";

function Card(props) {
  const handleOpenModal = async (eventId) => {
    await props.fetchSingleEvent(eventId), props.onClick();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow w-full md:w-[48%] h-90 md:h-96 overflow-hidden">
      <div className="relative h-60 w-full lg:h-64 md:w-full">
        <img
          className="rounded-t-lg h-full w-full object-cover"
          src={props.card.profileImage ?? props.card.image}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between p-2 sm:p-5 h-32">
        <div className="flex flex-col overflow-hidden w-4/6">
          <a href="#">
            <h5 className="mb-2 truncate text-lg font-bold tracking-tight text-gray-900">
              {props.card.title}
            </h5>
          </a>
          <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900">
            {new Date(props.card.dateOfEvent).toLocaleDateString()}
          </h5>
          <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 ">
            {props.card.location}
          </h5>
        </div>
        <div className="flex self-center">
          <button
            onClick={() => handleOpenModal(props.card._id)}
            className="inline-flex items-center xs:px-6 sm:px-10 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
          >
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
