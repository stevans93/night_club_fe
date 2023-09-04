import React from "react";
import { useEffect, useState } from "react";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterTop from "./FooterTop/FooterTop";

function Footer(props) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch(
        `http://localhost:4000/api/club/${props.clubId}`
      );
      const json = await response.json();
      if (response.ok) {
        setInfo(json);
      }
    };

    fetchInfo();
  }, []);

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
