import ActiveButton from "../../../Buttons/ActiveButton/ActiveButton";
import ActionButton from "../../../Buttons/ActionButton/ActionButton";
import CanceledButton from "../../../Buttons/CanceledButton/CanceledButton";

const DashboardReserveTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg mt-10 ml-3 mr-3">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2">
          <th className="border-r-2 bg-white px-6 py-3">SI</th>
          <th className="border-r-2 bg-white px-6 py-3">Order ID</th>
          <th className="border-r-2 bg-white px-6 py-3">Name</th>
          <th className="border-r-2 bg-white px-6 py-3">Phone</th>
          <th className="border-r-2 bg-white px-6 py-3">Date</th>
          <th className="border-r-2 bg-white px-6 py-3">Overview</th>
          <th className="border-r-2 bg-white px-6 py-3">Comments</th>
          <th className="border-r-2 bg-white px-6 py-3">Completed</th>
          <th className="border-r-2 bg-white px-6 py-3">Action</th>
        </thead>
        <tbody className="divide-y">
          <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="border-r-2 px-6 py-3">1</td>
            <td className="border-r-2 px-6 py-3">3141</td>
            <td className="border-r-2 px-6 py-3">Pera Peric</td>
            <td className="border-r-2 px-6 py-3">063-563-632</td>
            <td className="border-r-2 px-6 py-3">11 Aug 2023</td>
            <td className="border-r-2 px-6 py-3">
              Reservation - Total Person: 21 - Table 3
            </td>
            <td className="border-r-2 px-6 py-3"></td>
            <td className="border-r-2 px-6 py-3">
              <ActiveButton text="Completed" />
            </td>
            <td className="border-r-2 px-6 py-3">
              <ActionButton />
            </td>
          </tr>
          <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="border-r-2 px-6 py-3">1</td>
            <td className="border-r-2 px-6 py-3">3141</td>
            <td className="border-r-2 px-6 py-3">Pera Peric</td>
            <td className="border-r-2 px-6 py-3">063-563-632</td>
            <td className="border-r-2 px-6 py-3">11 Aug 2023</td>
            <td className="border-r-2 px-6 py-3">
              Reservation - Total Person: 21 - Table 3
            </td>
            <td className="border-r-2 px-6 py-3"></td>
            <td className="border-r-2 px-6 py-3">
              <ActiveButton text="Completed" />
            </td>
            <td className="border-r-2 px-6 py-3">
              <ActionButton />
            </td>
          </tr>
          <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="border-r-2 px-6 py-3">1</td>
            <td className="border-r-2 px-6 py-3">3141</td>
            <td className="border-r-2 px-6 py-3">Pera Peric</td>
            <td className="border-r-2 px-6 py-3">063-563-632</td>
            <td className="border-r-2 px-6 py-3">11 Aug 2023</td>
            <td className="border-r-2 px-6 py-3">
              Reservation - Total Person: 21 - Table 3
            </td>
            <td className="border-r-2 px-6 py-3"></td>
            <td className="border-r-2 px-6 py-3">
              <CanceledButton />
            </td>
            <td className="border-r-2 px-6 py-3">
              <ActionButton />
            </td>
          </tr>
          <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="border-r-2 px-6 py-3">1</td>
            <td className="border-r-2 px-6 py-3">3141</td>
            <td className="border-r-2 px-6 py-3">Pera Peric</td>
            <td className="border-r-2 px-6 py-3">063-563-632</td>
            <td className="border-r-2 px-6 py-3">11 Aug 2023</td>
            <td className="border-r-2 px-6 py-3">
              Reservation - Total Person: 21 - Table 3
            </td>
            <td className="border-r-2 px-6 py-3"></td>
            <td className="border-r-2 px-6 py-3">
              <ActiveButton text="Completed" />
            </td>
            <td className="border-r-2 px-6 py-3">
              <ActionButton />
            </td>
          </tr>
          <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="border-r-2 px-6 py-3">1</td>
            <td className="border-r-2 px-6 py-3">3141</td>
            <td className="border-r-2 px-6 py-3">Pera Peric</td>
            <td className="border-r-2 px-6 py-3">063-563-632</td>
            <td className="border-r-2 px-6 py-3">11 Aug 2023</td>
            <td className="border-r-2 px-6 py-3">
              Reservation - Total Person: 21 - Table 3
            </td>
            <td className="border-r-2 px-6 py-3"></td>
            <td className="border-r-2 px-6 py-3">
              <ActiveButton text="Completed" />
            </td>
            <td className="border-r-2 px-6 py-3">
              <ActionButton />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardReserveTable;
