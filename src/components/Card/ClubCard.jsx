import Badge from "../Badge/Badge";
import { Link } from "react-router-dom";

function ClubCard(props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={props.card.profileImage ?? props.card.image}
            alt=""
          />
        </a>
        {props.card.bannerImage && (
          <Badge
            bannerImage={props.card.bannerImage}
            className="absolute top-5 left-4 "
          />
        )}
      </div>
      <div className="flex items-center justify-between p-5">
        <div>
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {props.card.name}
            </h5>
          </a>
          <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">
            {props.card.dateOfEvent}
          </h5>
          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
            {props.card.description}
          </p>
          <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">
            {props.card.location}
          </h5>
        </div>
        <div>
          <Link
            to={props.page}
            className="inline-flex items-center xs:px-6 sm:px-10 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
          >
            {props.button}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClubCard;
