import React from "react";
import FooterTopInfo from "./FooterTopInfo/FooterTopInfo";
import WorkingHours from "./FooterTopLinks/WorkingHours";

function FooterTop(props) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
      <FooterTopInfo
        location={props.location}
        email={props.email}
        mobile={props.mobile}
      />
      <WorkingHours />
    </div>
  );
}

export default FooterTop;
