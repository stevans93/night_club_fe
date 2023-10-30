import React from "react";
import { useEffect, useState } from "react";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterTop from "./FooterTop/FooterTop";
import { useParams } from "react-router-dom";
import ClubsService from "../../services/clubsService";
import SiteService from "../../services/siteService";
import logo from '../../assets/where2go.png';


function Footer() {
  const [info, setInfo] = useState();
  const { clubId } = useParams();

  useEffect(() => {
    const fetchClubInfo = async () => {
      try {
        if (clubId) {
          const clubInfo = await ClubsService.getSingleClub(clubId);
          setInfo(clubInfo);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching club info:", error);
      }
    };

    const fetchSiteInfo = async () => {
      try {
        const siteInfo = await SiteService.getSingleSite();
        setInfo(siteInfo);
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching site info:", error);
      }
    };

    if (clubId) {
      fetchClubInfo();
    } else {
      fetchSiteInfo();
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
              logo={logo}
              description={info.description}
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
