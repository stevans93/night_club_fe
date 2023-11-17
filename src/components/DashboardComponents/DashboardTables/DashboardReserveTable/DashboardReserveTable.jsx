import ActiveButton from "../../../Buttons/ActiveButton/ActiveButton";
import ActionButton from "../../../Buttons/ActionButton/ActionButton";

const DashboardReserveTable = (props) => {
  const ncUser = JSON.parse(localStorage.getItem("nc_user"));

  // Get the user's role from the parsed user object
  const userRole = ncUser ? ncUser.role : null;

  return (
    <div className="relative shadow-lg rounded-lg mt-10 overflow-auto">
      <table className="w-full text-sm text-left text-gray-500 overflow-x-scroll">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
          <th className="border-r-2 bg-white px-6 py-3">SI</th>
          <th className="border-r-2 bg-white px-6 py-3">Naslov Događaja</th>
          <th className="border-r-2 bg-white px-6 py-3">Ime i Prezime</th>
          <th className="border-r-2 bg-white px-6 py-3">Mobilni Telefon</th>
          <th className="border-r-2 bg-white px-6 py-3">Datum</th>
          <th className="border-r-2 bg-white px-6 py-3">
            <td className="px-6 py-3">
              {userRole === "admin" ? `Ime Kluba` : `Pregled`}
            </td>
          </th>
          <th className="border-r-2 bg-white px-6 py-3">Status</th>

          {userRole === "admin" ? (
            <></>
          ) : (
            <th className="border-r-2 bg-white px-6 py-3">Opcije</th>
          )}
        </thead>
        <tbody className="divide-y">
          {props.reservations.map((reservation, i) => {
            return (
              <tr key={reservation._id} className="bg-white  ">
                <td className="border-r-2 px-6 py-3">
                  {i + 1 + props.pageSize * (props.pageNumber - 1)}
                </td>
                <td className="border-r-2 px-6 py-3">
                  {reservation.eventTitle}
                </td>
                <td className="border-r-2 px-6 py-3">{reservation.name}</td>
                <td className="border-r-2 px-6 py-3">{reservation.phone}</td>
                <td className="border-r-2 px-6 py-3">
                  {new Date(reservation.date).toLocaleDateString()}
                </td>
                <td className="border-r-2 px-6 py-3">
                  {userRole === "admin"
                    ? `${reservation.clubName}`
                    : `Reservation - Total Person: ${reservation.persons} - Table ${reservation.tableName}`}
                </td>

                <td className="border-r-2 px-6 py-3">
                  <ActiveButton text={reservation.status} />
                </td>

                {userRole === "admin" ? (
                  <></>
                ) : (
                  <>
                    <td className="border-r-2 px-6 py-3">
                      <ActionButton
                        handleEditModalOpen={() =>
                          props.handleEditModalOpen(reservation._id)
                        }
                        handleDelete={() => props.handleDelete(reservation._id)}
                      />
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardReserveTable;
