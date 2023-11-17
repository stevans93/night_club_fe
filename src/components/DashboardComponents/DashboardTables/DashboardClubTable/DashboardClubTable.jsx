import EditButton from "../../../Buttons/EditButton/EditButton";
import DeleteButton from "../../../Buttons/DeleteButton/DeleteButton";

const DashboardClubsTable = (props) => {
  return (
    <>
      <div className="relative shadow-lg rounded-lg mt-10 overflow-auto">
        <table className="w-full text-sm text-left text-gray-500 overflow-x-scroll">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
            <th className="border-r-2 bg-white px-6 py-3">SI</th>
            <th className="border-r-2 bg-white px-6 py-3">Ime kluba</th>
            <th className="border-r-2 bg-white px-6 py-3">Tip kluba</th>
            <th className="border-r-2 bg-white px-6 py-3">Adresa kluba</th>
            <th className="border-r-2 bg-white px-6 py-3">Akcije</th>
          </thead>
          <tbody className="divide-y">
            {props.clubs.map((club, i) => {
              return (
                <>
                  <tr key={club._id} className="bg-white  ">
                    <td className="border-r-2 px-6 py-3">
                      {i + 1 + props.pageSize * (props.pageNumber - 1)}
                    </td>
                    <td className="border-r-2 px-6 py-3">{club.name}</td>
                    <td className="border-r-2 px-6 py-3">{club.type}</td>
                    <td className="border-r-2 px-6 py-3">{club.location}</td>
                    <td className="flex  gap-4 border-r-2 px-6 py-3">
                      <EditButton
                        onClick={() => props.handleEditModalOpen(club._id)}
                      />
                      <DeleteButton
                        onClick={() => props.handleDelete(club._id)}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardClubsTable;
