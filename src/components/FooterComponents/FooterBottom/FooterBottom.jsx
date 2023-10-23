import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import SiteService from "../../../services/siteService";

function FooterBottom() {
  const [info, setInfo] = useState("");
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await SiteService.getSingleSite();
        setInfo(response);
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching club info:", error);
      }
    };

    fetchInfo();
  }, []);

  return (
    <>
      {info && (
        <div className="text-white text-base flex flex-col lg:flex-row items-center justify-between gap-4 m-2">
          <p>Copyright &copy; 2023 Where2go</p>

          <div className="flex items-center">
            <Link
              to={info.socialMedia.find((x) => x.name === "Facebook").link}
              className="m-2"
            >
              <BiLogoFacebook className="fill-white" size="1.3rem" />
            </Link>
            <Link
              to={info.socialMedia.find((x) => x.name === "WhatsApp").link}
              className="m-2"
            >
              <BsFillTelephoneFill className="fill-white" />
            </Link>
            <Link
              to={info.socialMedia.find((x) => x.name === "Instagram").link}
              className="m-2"
            >
              <BsInstagram className="fill-white" size="1.1rem" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default FooterBottom;
