import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter, BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const ClubHeader = () => {
  return (
    <div className="flex h-20 justify-center">
      <div className="flex w-full max-w-5xl justify-between">
        <div className="flex gap-10 items-center">
          <span className="text-xl">Logo</span>
          <div className="flex">
            <ul className="flex gap-5 items-center">
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
            <FaEnvelope className="fill-[#475DDB]" />
          </Link>
          <Link to="#" className="m-2">
            <BsFillTelephoneFill className="fill-[#475DDB]"/>
          </Link>
          <Link to="#" className="m-2">
            <BiLogoFacebook className="fill-[#475DDB]" size='1.3rem' />
          </Link>
          <Link to="#" className="m-2">
            <BsTwitter className="fill-[#475DDB]" />
          </Link>
          <Link to="#" className="m-2">
            <BsInstagram className="fill-[#475DDB]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClubHeader;
