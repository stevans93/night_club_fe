import { BsSearch } from "react-icons/bs";
import { BiListUl } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

const ReservationHeader = (props) => {
  const handleChangeDate = (event) => {
    props.handleChangeDate(event.target.value);
  };

  return (
    <>
      <div className="flex rounded-lg items-center h-16 justify-between px-5 bg-white">
        <div className="flex items-center gap-3">
          <button onClick={props.handleTodaysReservations}>
            Todays Reservation
          </button>
          <button
            onClick={props.handleAllReservations}
            className="flex items-center px-3 rounded-lg bg-primary h-8 text-white"
          >
            <BiListUl size="1.5rem" />
            All Reservation list
          </button>
          <button
            onClick={props.handleAddReservationModalOpen}
            className="flex items-center px-3 rounded-lg bg-primary h-8 text-white"
          >
            <AiOutlinePlus size="1.2rem" />
            Add reservation
          </button>
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

          <div>
            <input
              className="border rounded-xl w-fit h-8 px-2"
              type="date"
              onChange={handleChangeDate}
            />
          </div>

          <div>
            <select
              className="h-8 w-20 border rounded-xlpx-1 border rounded-xl"
              value={props.selectedTable}
              onChange={(event) => {
                props.handleChangeTable(event.target.value);
              }}
            >
              <option value="">Table</option>
              {props.tableOptions.map((x) => {
                return (
                  <option key={x} value={x}>
                    {x}
                  </option>
                );
              })}
            </select>
          </div>

          <select
            className="h-8 w-20 border rounded-xlpx-1 border rounded-xl"
            value={props.selectedStatus}
            onChange={(event) => {
              props.handleChangeStatus(event.target.value);
            }}
          >
            <option value="">Status</option>
            {props.statusOptions.map((x) => {
              return (
                <option key={x} value={x}>
                  {x}
                </option>
              );
            })}
          </select>
          <button className="flex items-center px-3 rounded-lg bg-primary h-8 text-white gap-2">
            <FaFilter />
            Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default ReservationHeader;
