import React from "react";
import { useEffect, useState } from "react";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterTop from "./FooterTop/FooterTop";
import { useParams } from "react-router-dom";

function Footer() {
  const initalState = {
    location: "Default Location",
    email: "someemail@kme.com",
    mobile: "044020404024",
  };

  const [info, setInfo] = useState(initalState);
  const {clubId} = useParams();

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch(
        `http://localhost:4000/api/club/singleClub/${clubId}`
      );
      const json = await response.json();
      if (response.ok) {
        setInfo(json);
      }
    };

    if (clubId) {
      fetchInfo();
    } else {
      setInfo(initalState);
    }
  }, [clubId]);

  return (
    <div className="static bottom-0">
      <div className="bg-secondary py-[60px]">
        <div className="container mx-auto px-4">
          {info && (
            <FooterTop
              location={info.location}
              email={info.email}
              mobile={info.mobile}
            />
          )}
        </div>
      </div>
      <div className="bg-primary py-[20px]">
        <div className="container mx-auto px-4">
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default Footer;
