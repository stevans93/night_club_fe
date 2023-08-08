const premiumStyle = "bg-[#FEB258] text-black";
const eventStyle = "bg-[#475DDB]";

function Badge(props) {
  return (
    <div
      className={`inline-flex items-center pr-5 p-1 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none
        ${props.className} 
        ${props.badgeType === "event" && eventStyle}
        ${props.badgeType === "premium" && premiumStyle}`}
    >
      {props.badgeType === "premium" && (
        <span className="inline-flex items-center justify-center w-4 h-4 mx-2">
          <svg
            fill="#000000"
            height="64px"
            width="64px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            enableBackground="new 0 0 512 512"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="5.12"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="m497.9,166.8l-63.9-143.6c-3.3-7.4-10.6-12.1-18.6-12.1h-318.9c-8.1,0-15.4,4.7-18.6,12.1l-65.1,146c0,0.1-5,10.4 2.2,20.4l224.5,303c12.5,14.8 28.4,6.8 32.8,0l223.1-301.1c4.1-3.6 8.8-14.1 2.5-24.7zm-48.9-9.7h-109.8l20.3-105.2h42.6l46.9,105.2zm-226.9,40.8h67.6l-33.8,175-33.8-175zm-7.9-40.8l-20.3-105.2h124l-20.3,105.2h-83.4zm-104.5-105.2h42.6l20.3,105.2h-109.8l46.9-105.2zm70.8,146l38.3,198.2-146.9-198.2h108.6zm112.5,198.3l38.3-198.2h108.6l-146.9,198.2z"></path>{" "}
              </g>
            </g>
          </svg>
        </span>
      )}
      {props.badgeType === "premium" && <span className="text-black font-bold">PREMIJUM MESTO</span>}
      {props.badgeType === "event" && <span className="pl-5">DOGADJAJI</span>}
    </div>
  );
}

export default Badge;
