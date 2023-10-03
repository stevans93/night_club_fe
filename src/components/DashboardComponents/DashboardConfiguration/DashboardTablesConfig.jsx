import { useEffect, useState } from "react";
import ClubsService from "../../../services/clubsService";
import EditButton from "../../Buttons/EditButton/EditButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import TablesHeader from "../DashboardHeaders/TablesHeader/TablesHeader";

const DashboardTablesConfig = (props) => {
  const [tables, setTables] = useState(null);
  const pageSizeOptions = [15, 30, 45];

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;

  useEffect(() => {
    const fetchClubById = async () => {
      try {
        const clubInfo = await ClubsService.getSingleClub(clubId);

        setTables(clubInfo.tables);
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching club info:", error);
      }
    };

    fetchClubById();
  }, [clubId]);

  console.log(tables);

  return (
    <>
      <TablesHeader pageSizeOptions={pageSizeOptions} />
      {tables && (
        <div className="relative h-fit w-full border-t-2">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 w-3/5 shadow-lg rounded-lg mt-10 ml-10 border-r-2 border-l-2">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-t-2">
              <th className="border-r-2 bg-white px-6 py-3">SI</th>
              <th className="border-r-2 bg-white px-6 py-3">Name</th>
              <th className="border-r-2 bg-white px-6 py-3">Max people</th>
              <th className="border-r-2 bg-white px-6 py-3">Area</th>
              <th className="bg-white px-6 py-3">Actions</th>
            </thead>
            <tbody className="divide-y">
              {tables.map((table, i) => {
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
    </>
  );
};

export default DashboardTablesConfig;
