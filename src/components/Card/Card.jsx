import Badge from '../Badge/Badge'

function Card(props) {
  const handleOpenModal = async (eventId) => {
    await props.fetchSingleEvent(eventId), props.onClick()
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow ">
      <div className="relative">
        <a href="#">
          <img className="rounded-t-lg" src={props.card.profileImage ?? props.card.image} alt="" />
        </a>
        {props.card.bannerImage && <Badge bannerImage={props.card.bannerImage} className="absolute top-5 left-4 " />}
      </div>
      <div className="flex items-center justify-between p-5">
        <div>
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{props.card.title}</h5>
          </a>
          <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 ">
            {new Date(props.card.dateOfEvent).toLocaleDateString()}
          </h5>
          <p className="mb-3 pr-3 text-sm font-normal text-gray-700 ">{props.card.description.substring(0, 100)}...</p>
        </div>
        <div>
          <button
            onClick={() => handleOpenModal(props.card._id)}
            className="inline-flex items-center xs:px-6 sm:px-10 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
