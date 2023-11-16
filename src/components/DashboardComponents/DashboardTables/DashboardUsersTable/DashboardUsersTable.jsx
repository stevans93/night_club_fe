import EditButton from "../../../Buttons/EditButton/EditButton";
import DeleteButton from "../../../Buttons/DeleteButton/DeleteButton";

const DashboardUsersTable = (props) => {
  return (
    <>
      <div className="relative shadow-lg rounded-lg mt-10 overflow-auto">
        <table className="w-full text-sm text-left text-gray-500 overflow-x-scroll">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
            <th className="border-r-2 bg-white px-6 py-3">SI</th>
            <th className="border-r-2 bg-white px-6 py-3">Ime</th>
            <th className="border-r-2 bg-white px-6 py-3">Mobilni Telefon</th>
            <th className="border-r-2 bg-white px-6 py-3">E-mail Adresa</th>
            <th className="border-r-2 bg-white px-6 py-3">Actions</th>
          </thead>
          <tbody className="divide-y">
            {props.users.map((user, i) => {
              return (
                <>
                  {user.role !== "admin" && (
                    <tr key={user._id} className="bg-white  ">
                      <td className="border-r-2 px-6 py-3">
                        {i + 1 + props.pageSize * (props.pageNumber - 1)}
                      </td>
                      <td className="border-r-2 px-6 py-3">{`${user.firstName} ${user.lastName}`}</td>
                      <td className="border-r-2 px-6 py-3">
                        {user.mobilePhone}
                      </td>
                      <td className="border-r-2 px-6 py-3">{user.email}</td>
                      <td className="flex  gap-4 border-r-2 px-6 py-3">
                        <EditButton onClick={() => props.handleEditModalOpen(user._id)} />
                        <DeleteButton onClick={() => props.handleDelete(user._id)} />
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardUsersTable;
