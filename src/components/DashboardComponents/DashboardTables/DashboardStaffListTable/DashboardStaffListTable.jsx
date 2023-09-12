const DashboardStaffListTable = () => {
  return (
    <div className="flex flex-col ml-2 bg-white w-fit rounded-lg px-2 pb-10 w-3/6">
      <div className="flex border-b-2 w-full h-14 items-center">
        <span>Staff list</span>
      </div>
      <div className="relative overflow-x-auto shadow-md rounded-lg mt-10 mt-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2">
            <th className="border-r-2 bg-white px-6 py-3">SI</th>
            <th className="border-r-2 bg-white px-6 py-3">Name</th>
            <th className="border-r-2 bg-white px-6 py-3">Email</th>
            <th className="border-r-2 bg-white px-6 py-3">Premission</th>
            <th className="border-r-2 bg-white px-6 py-3">Status</th>
            <th className="border-r-2 bg-white px-6 py-3">Action</th>
          </thead>
          <tbody className="divide-y">
            <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <td className="border-r-2 px-6 py-3 align-baseline">1</td>
              <td className="border-r-2 px-6 py-3 align-baseline">
                Pera Peric
              </td>
              <td className="border-r-2 px-6 py-3 align-baseline">
                peraperic@gmail.com
              </td>
              <td className="border-r-2 px-6 py-3 align-baseline">
                <table>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2">
                    <th className="border-2 bg-white px-6 py-3">SI</th>
                    <th className="border-2 bg-white px-6 py-3">Name</th>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <td className="border-2 px-6 py-3">1</td>
                      <td className="border-2 px-6 py-3">Reservation</td>
                    </tr>
                    <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <td className="border-2 px-6 py-3">1</td>
                      <td className="border-2 px-6 py-3">Reservation</td>
                    </tr>
                    <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <td className="border-2 px-6 py-3">1</td>
                      <td className="border-2 px-6 py-3">Reservation</td>
                    </tr>
                    <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <td className="border-2 px-6 py-3">1</td>
                      <td className="border-2 px-6 py-3">Reservation</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="border-r-2 px-6 py-3 align-baseline">Active</td>
              <td className="border-r-2 px-6 py-3 align-baseline">
                Lock Edit Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardStaffListTable;
