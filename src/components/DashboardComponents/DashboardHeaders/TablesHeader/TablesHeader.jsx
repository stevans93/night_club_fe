import { AiOutlinePlus } from "react-icons/ai";

const TablesHeader = (props) => {
  return (
    <>
      <div className="flex items-center h-16 justify-between px-5 bg-white border-b-2 mb-4">
        <div className="flex items-center gap-3">
          <span>Lista Stolova</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span>Prikži</span>
            <select
              className="px-1 w-16 border rounded-xl text-center"
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
            onClick={props.handleTableModalOpen}
            className="flex items-center px-5 py-3 rounded-lg bg-primary h-8 text-white gap-2"
          >
            <AiOutlinePlus size="1.3rem" />
            Dodaj Sto
          </button>
        </div>
      </div>
    </>
  );
};

export default TablesHeader;
