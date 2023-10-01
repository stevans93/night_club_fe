import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter, BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ClubsService from "../../services/clubsService";

const ClubHeader = () => {
  const [info, setInfo] = useState('');
  const { clubId } = useParams();

  useEffect(() => {
    const fetchInfo = async () => {
      if (clubId) {
        try {
          const response = await ClubsService.getSingleClub(clubId);
          setInfo(response);
        } catch (error) {
          // Handle any errors here
          console.error("An error occurred while fetching club info:", error);
        }
      }
    };
  
    fetchInfo();
  }, [clubId]);

  return (
    <div className="flex h-20 justify-center">
      <div className="flex w-full max-w-5xl justify-between">
        <div className="flex gap-10 items-center">
          <img
            className="h-4/5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtomcAhqHu3X2B8Haxa3bK3mXFYqhMtDYJg&usqp=CAU"
          />
          <div className="flex">
            <ul className="flex gap-5 items-center m-0">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Menu</Link>
              </li>
              <li>
                <Link to="">Events</Link>
              </li>
              <li>
                <Link to="">Reservation</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <Link to="#" className="m-2">
            <FaEnvelope className="fill-primary" />
          </Link>
          <Link to="#" className="m-2">
            <BsFillTelephoneFill className="fill-primary" />
          </Link>
          <Link to="#" className="m-2">
            <BiLogoFacebook className="fill-primary" size="1.3rem" />
          </Link>
          <Link to="#" className="m-2">
            <BsTwitter className="fill-primary" />
          </Link>
          <Link to="#" className="m-2">
            <BsInstagram className="fill-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClubHeader;
