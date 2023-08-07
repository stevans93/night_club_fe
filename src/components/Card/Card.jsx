import party_image from "../../assets/party-image.jpg";
import Badge from "../Badge/Badge";

function Card(props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <a href="#">
          <img className="rounded-t-lg" src={party_image} alt="" />
        </a>
        {props.card.badge && <Badge badgeType={props.card.badge} className="absolute top-5 left-4 " />}
      </div>
      <div className="flex items-center justify-between p-5">
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.card.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.card.description}
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.card.location}
          </h5>
        </div>
        <div>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Istrazi
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
