import React from "react";

function FooterTopAbout(props) {
  return (
    <div className="flex w-3/12 justify-center">
      <span>{props.description}</span>
    </div>
  );
}

export default FooterTopAbout;
