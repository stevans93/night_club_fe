import { BsSearch } from "react-icons/bs";
import { BiSolidFileExport } from "react-icons/bi";

const CustomerHeader = (props) => {

  return (
    <>
      <div className="flex rounded-lg items-center h-16 justify-between px-5 bg-white shadow-lg">
        <div className="flex items-center gap-3">
          <span>Customer List</span>
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
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-xl w-fit h-8 px-2">
            <input
              className="focus-visible:outline-none"
              placeholder="Name"
              type="search"
              onChange={(event) => props.handleChangeName(event.target.value)}
            />
            <BsSearch />
          </div>
          <button className="flex items-center px-3 rounded-xl bg-primary h-8 text-white gap-2">
            <BiSolidFileExport size="1.2rem" />
            Export
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomerHeader;
