import { AiOutlinePlus } from "react-icons/ai";

const CouponHeader = (props) => {
  return (
    <>
      <div className="flex ml-3 mr-3 rounded-lg items-center h-16 justify-between px-5 bg-white">
        <div className="flex items-center gap-3">
          <span>Coupon list</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select
              className="px-1 w-16 border rounded-xl"
              value={props.pageSize}
              onChange={(event) =>
                props.handlePageSizeChange(event.target.value)
              }
            >
              {props.pageSizeOptions.map((x) => {
                return (
                  <option key={x} value={x}>
                    {x}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            onClick={props.handleCouponModalOpen}
            className="flex items-center px-5 py-3 rounded-lg bg-primary h-8 text-white gap-2"
          >
            <AiOutlinePlus size="1.3rem" />
            Add coupon
          </button>
        </div>
      </div>
    </>
  );
};

export default CouponHeader;
