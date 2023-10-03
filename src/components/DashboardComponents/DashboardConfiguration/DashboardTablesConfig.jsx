import EditButton from "../../Buttons/EditButton/EditButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import TablesHeader from "../DashboardHeaders/TablesHeader/TablesHeader";
import TablePagination from "../../TablePagination/TablePagination";
import AddTableForm from "../DashboardForms/AddTableForm/AddTableForm";
import { useState } from "react";

const DashboardTablesConfig = (props) => {
  const [isAddTableModalOpen, setIsAddTableModalOpen] = useState(false);

  const handleTableModalOpen = () => {
    setIsAddTableModalOpen(true);
  };

  const handleTableModalClose = () => {
    setIsAddTableModalOpen(false);
  };

  const handlePageSizeChange = (value) => {
    props.setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageSize: value,
      pageNumber: 1,
    }));
  };

  const handleNextPage = () => {
    props.setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageNumber: selectedParams.pageNumber + 1,
    }));
  };

  const handlePreviousPage = () => {
    props.setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageNumber: selectedParams.pageNumber - 1,
    }));
  };

  return (
    <div className="flex flex-col mt-6 ml-4 shadow-lg w-3/6 px-5 border-t-2">
      <TablesHeader pageSizeOptions={props.pageSizeOptions} handleTableModalOpen={handleTableModalOpen} />
      {props.tables && (
        <div className="relative h-fit w-full border-t-2">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-lg rounded-lg border-r-2 border-l-2">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2">
              <th className="border-r-2 bg-white px-6 py-3">SI</th>
              <th className="border-r-2 bg-white px-6 py-3">Name</th>
              <th className="border-r-2 bg-white px-6 py-3">Max people</th>
              <th className="border-r-2 bg-white px-6 py-3">Area</th>
              <th className="bg-white px-6 py-3">Actions</th>
            </thead>
            <tbody className="divide-y">
              {props.tables.map((table, i) => {
                return (
                  <tr
                    key={table._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td className="border-r-2 px-6 py-3">{i++ + 1}</td>
                    <td className="border-r-2 px-6 py-3">{table.name}</td>
                    <td className="border-r-2 px-6 py-3">{table.maxPersons}</td>
                    <td className="border-r-2 px-6 py-3">{table.area}</td>
                    <td className="flex px-6 py-3 gap-2">
                      <EditButton
                        onClick={() => props.handleEditModalOpen(table._id)}
                      />
                      <DeleteButton
                        onClick={() => props.handleDelete(table._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <TablePagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        pageSize={props.selectedParams.pageSize}
        numberOfPages={props.numberOfPages}
        numberOfItems={props.numberOfTables}
        selectedParams={props.selectedParams}
      />

      <AddTableForm
        isAddTableModalOpen={isAddTableModalOpen}
        handleTableModalClose={handleTableModalClose}
      />
    </div>
  );
};

export default DashboardTablesConfig;
