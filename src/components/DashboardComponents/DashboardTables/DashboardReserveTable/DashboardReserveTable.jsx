import ActiveButton from "../../../Buttons/ActiveButton/ActiveButton";
import ActionButton from "../../../Buttons/ActionButton/ActionButton";

const DashboardReserveTable = (props) => {
  return (
    <div className="relative shadow-md rounded-lg mt-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2">
          <th className="border-r-2 bg-white px-6 py-3">SI</th>
          <th className="border-r-2 bg-white px-6 py-3">Order ID</th>
          <th className="border-r-2 bg-white px-6 py-3">Name</th>
          <th className="border-r-2 bg-white px-6 py-3">Phone</th>
          <th className="border-r-2 bg-white px-6 py-3">Date</th>
          <th className="border-r-2 bg-white px-6 py-3">Overview</th>
          <th className="border-r-2 bg-white px-6 py-3">Completed</th>
          <th className="border-r-2 bg-white px-6 py-3">Action</th>
        </thead>
        <tbody className="divide-y">
          {props.reservations.map((reservation, i) => {
            return (
              <tr
                key={reservation._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <td className="border-r-2 px-6 py-3">
                  {i + 1 + props.pageSize * (props.pageNumber - 1)}
                </td>
                <td className="border-r-2 px-6 py-3">{reservation._id}</td>
                <td className="border-r-2 px-6 py-3">{reservation.name}</td>
                <td className="border-r-2 px-6 py-3">{reservation.phone}</td>
                <td className="border-r-2 px-6 py-3">{reservation.date}</td>
                <td className="border-r-2 px-6 py-3">
                  Reservation - Total Person: {reservation.persons} - Table{" "}
                  {reservation.table}
                </td>

                <td className="border-r-2 px-6 py-3">
                  <ActiveButton text={reservation.status} />
                </td>
                <td className="border-r-2 px-6 py-3">
                  <ActionButton
                    handleEditModalOpen={() =>
                      props.handleEditModalOpen(reservation._id)
                    }
                    handleDelete={() => props.handleDelete(reservation._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardReserveTable;
