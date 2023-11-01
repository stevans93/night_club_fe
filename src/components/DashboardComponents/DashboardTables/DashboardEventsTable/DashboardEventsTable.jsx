import DeleteButton from "../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../Buttons/EditButton/EditButton";

const DashboardEventsTable = (props) => {
  return (
    <>
      <div className="relative shadow-lg rounded-lg mt-10">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
            <th className="border-r-2 bg-white px-6 py-3">#</th>
            <th className="border-r-2 bg-white px-6 py-3">Ime</th>
            <th className="border-r-2 bg-white px-6 py-3">Opis</th>
            <th className="border-r-2 bg-white px-6 py-3">Datum</th>
            <th className="border-r-2 bg-white px-6 py-3">Cena Ulaznice</th>
            <th className="border-r-2 bg-white px-6 py-3">Tip Događaja</th>
            <th className="border-r-2 bg-white px-6 py-3">Opcije</th>
          </thead>
          <tbody className="divide-y">
            {props.events.map((event, i) => {
              return (
                <tr
                  key={event._id}
                  className="bg-white  "
                >
                  <td className="border-r-2 px-6 py-3">
                    {i + 1 + props.pageSize * (props.pageNumber - 1)}
                  </td>
                  <td className="border-r-2 px-6 py-3">{event.title}</td>
                  <td className="border-r-2 px-6 py-3">{event.description}</td>
                  <td className="border-r-2 px-6 py-3">{new Date(event.dateOfEvent).toLocaleDateString()}</td>
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
