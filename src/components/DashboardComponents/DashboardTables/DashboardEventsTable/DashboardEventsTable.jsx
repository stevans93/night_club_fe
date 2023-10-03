import DeleteButton from "../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../Buttons/EditButton/EditButton";

const DashboardEventsTable = (props) => {
  return (
    <>
      <div className="relative shadow-lg rounded-lg mt-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2">
            <th className="border-r-2 bg-white px-6 py-3">#</th>
            <th className="border-r-2 bg-white px-6 py-3">Name</th>
            <th className="border-r-2 bg-white px-6 py-3">Description</th>
            <th className="border-r-2 bg-white px-6 py-3">Date</th>
            <th className="border-r-2 bg-white px-6 py-3">Ticket price</th>
            <th className="border-r-2 bg-white px-6 py-3">Type</th>
            <th className="border-r-2 bg-white px-6 py-3">Action</th>
          </thead>
          <tbody className="divide-y">
            {props.events.map((event, i) => {
              return (
                <tr
                  key={event._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="border-r-2 px-6 py-3">
                    {i + 1 + props.pageSize * (props.pageNumber - 1)}
                  </td>
                  <td className="border-r-2 px-6 py-3">{event.name}</td>
                  <td className="border-r-2 px-6 py-3">{event.description}</td>
                  <td className="border-r-2 px-6 py-3">{event.dateOfEvent}</td>
                  <td className="border-r-2 px-6 py-3">{event.ticketPrice}</td>
                  <td className="border-r-2 px-6 py-3">{event.type}</td>
                  <td className="flex border-r-2 px-6 py-3 gap-2">
                    <EditButton
                      onClick={() => props.handleEditModalOpen(event._id)}
                    />
                    <DeleteButton
                      onClick={() => props.handleDelete(event._id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardEventsTable;
