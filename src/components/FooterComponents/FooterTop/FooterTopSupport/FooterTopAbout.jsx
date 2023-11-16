import React from "react";

function FooterTopAbout(props) {
  return (
    <div className="flex md:w-[40%] text-center justify-center">
      <span>{props.description}</span>
    </div>
  );
}

export default FooterTopAbout;
