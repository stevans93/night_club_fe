import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const TablePagination = (props) => {
  return (
    <div className="bg-white flex w-full justify-center relative mt-10">
      <span className="absolute left-0">
        Show
        <span>
          {props.pageSize < props.numberOfReservations
            ? props.pageSize
            : props.numberOfReservations}
        </span>
        of <span>{props.numberOfReservations}</span>
      </span>
      <div className="flex gap-3">
        <button
          onClick={props.handlePreviousPage}
          disabled={props.selectedParams.pageNumber === 1}
          className="bg-primary text-white"
        >
          <MdKeyboardArrowLeft size="1.1rem" />
        </button>
        <span>{props.selectedParams.pageNumber} of {props.numberOfPages}</span>
        <button
          onClick={props.handleNextPage}
          disabled={props.selectedParams.numberOfPages === props.numberOfPages}
          className="bg-primary text-white"
        >
          <MdKeyboardArrowRight size="1.1rem" />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
