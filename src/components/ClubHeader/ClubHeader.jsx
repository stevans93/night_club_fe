import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ClubsService from "../../services/clubsService";
import ReservationModal from "../ReservationModal/ReservationModal";

const ClubHeader = () => {
  const [info, setInfo] = useState("");
  const { clubId } = useParams();
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [tables, setTables] = useState(null);
  const pageSizeOptions = [15, 30, 45];
  const [selectedParams, setSelectedParams] = useState({
    table: "",
    status: "",
    pageNumber: 1,
    pageSize: pageSizeOptions[0],
  });

  const handleShowModal = () => {
    setShowReservationModal(true);
  };

  const handleCloseReservationModal = () => {
    setShowReservationModal(false);
  };

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

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const result = await ClubsService.getAllTables(
          selectedParams.pageNumber,
          selectedParams.pageSize
        );

        setTables(result.tables);
        console.log(result);
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching tables:", error);
      }
    };

    fetchTables();
  }, []);

  return (
    <>
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
                  <button onClick={handleShowModal}>Reservation</button>
                </li>
              </ul>
            </div>
          </div>
          {info && (
            <div className="flex items-center">
              <Link to="#" className="m-2">
                <FaEnvelope className="fill-primary" />
              </Link>
              <Link
                to={info.socialMedia.find((x) => x.name === "WhatsApp").link}
                className="m-2"
              >
                <BsFillTelephoneFill className="fill-primary" />
              </Link>
              <Link
                to={info.socialMedia.find((x) => x.name === "Facebook").link}
                className="m-2"
              >
                <BiLogoFacebook className="fill-primary" size="1.3rem" />
              </Link>
              <a
                href={info.socialMedia.find((x) => x.name === "Instagram").link}
                target="_blank"
                className="m-2"
              >
                <BsInstagram className="fill-primary" />
              </a>
            </div>
          )}
        </div>
      </div>
      {showReservationModal && tables && (
        <ReservationModal
          handleCloseReservationModal={handleCloseReservationModal}
          showReservationModal={showReservationModal}
          tables={tables}
        />
      )}
    </>
  );
};

export default ClubHeader;
