const DashboardUsersTable = (props) => {
  return (
    <>
      <div className="relative shadow-lg rounded-lg mt-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2">
            <th className="border-r-2 bg-white px-6 py-3">SI</th>
            <th className="border-r-2 bg-white px-6 py-3">Name</th>
            <th className="border-r-2 bg-white px-6 py-3">Phone</th>
            <th className="border-r-2 bg-white px-6 py-3">Email</th>
          </thead>
          <tbody className="divide-y">
            {props.users.map((user, i) => {
              return (
                <tr
                  key={user._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="border-r-2 px-6 py-3">
                    {i + 1 + props.pageSize * (props.pageNumber - 1)}
                  </td>
                  <td className="border-r-2 px-6 py-3">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="border-r-2 px-6 py-3">{user.mobilePhone}</td>
                  <td className="border-r-2 px-6 py-3">{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardUsersTable;
