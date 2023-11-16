import React from "react";
import FooterTopInfo from "./FooterTopInfo/FooterTopInfo";
import WorkingHours from "./FooterTopLinks/WorkingHours";
import FooterTopAbout from "./FooterTopSupport/FooterTopAbout";

function FooterTop(props) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
      <FooterTopInfo
        location={props.location}
        email={props.email}
        mobile={props.mobile}
        logo={props.logo}
      />
      <FooterTopAbout description={props.description} />
      <WorkingHours />
    </div>
  );
}

export default FooterTop;
