import EditButton from "../../Buttons/EditButton/EditButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import TablesHeader from "../DashboardHeaders/TablesHeader/TablesHeader";
import TablePagination from "../../TablePagination/TablePagination";
import AddTableForm from "../DashboardForms/AddTableForm/AddTableForm";
import { useState } from "react";
import EditTableForm from "../DashboardForms/EditTableForm/EditTableForm";
import ClubsService from "../../../services/clubsService";

const DashboardTablesConfig = (props) => {
  const [isAddTableModalOpen, setIsAddTableModalOpen] = useState(false);
  const [isEditTableModalOpen, setIsEditTableModalOpen] = useState(false);
  const [tableToEdit, setTableToEdit] = useState(null);

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

  const handleEditModalOpen = async (id) => {
    await fetchTableById(id);
    setIsEditTableModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditTableModalOpen(false);
  };

  const handleDelete = async (id) => {
    await fetchDeleteTableById(id);
  };

  const fetchTableById = async (id) => {
    try {
      const response = await ClubsService.getSingleTable(id);

      if (response) {
        // Handle success
        setTableToEdit(response.table); // Assuming setTableToEdit is a state updater function
        
        // You can perform additional actions if needed
      } else {
        // Handle failure
        
        console.error("Failed to fetch Table", error);
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while fetching the Table:", error);
    }
  };

  const fetchDeleteTableById = async (id) => {
    try {
      const response = await ClubsService.deleteTable(id);

      if (response) {
        // Handle success
        console.log("Table deleted successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.error("Failed to delete Table");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while deleting the Table:", error);
    }
  };

  return (
    <div className="flex flex-col mt-4 ml-4 shadow-lg px-5 bg-white h-fit py-3">
      <TablesHeader
        pageSizeOptions={props.pageSizeOptions}
        handleTableModalOpen={handleTableModalOpen}
      />
      {props.tables && (
        <div className="relative h-fit w-full border-t-2">
          <table className="w-full text-sm text-left text-gray-500  rounded-lg border-r-2 border-l-2 border-b-2">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
              <th className="border-r-2 bg-white px-6 py-3">SI</th>
              <th className="border-r-2 bg-white px-6 py-3">Ime</th>
              <th className="border-r-2 bg-white px-6 py-3">Maksimalan Broj Ljudi</th>
              <th className="border-r-2 bg-white px-6 py-3">Mesto u Klubu</th>
              <th className="bg-white px-6 py-3">Opcije</th>
            </thead>
            <tbody className="divide-y">
              {props.tables.map((table, i) => {
                return (
                  <tr
                    key={table._id}
                    className="bg-white  "
                  >
                    <td className="border-r-2 px-6 py-3">{i++ + 1}</td>
                    <td className="border-r-2 px-6 py-3">{table.name}</td>
                    <td className="border-r-2 px-6 py-3">{table.maxPersons}</td>
                    <td className="border-r-2 px-6 py-3">{table.area}</td>
                    <td className="flex px-6 py-3 gap-2">
                      <EditButton
                        onClick={() => handleEditModalOpen(table._id)}
                      />
                      <DeleteButton onClick={() => handleDelete(table._id)} />
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

      {tableToEdit && (
        <EditTableForm
          table={tableToEdit}
          isEditTableModalOpen={isEditTableModalOpen}
          handleEditModalClose={handleEditModalClose}
        />
      )}
    </div>
  );
};

export default DashboardTablesConfig;
