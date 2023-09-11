import { Table } from "flowbite-react";

const DashboardPaymentTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg mt-10 ml-3 mr-3">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2">
          <th className="border-r-2 bg-white px-6 py-3">SI</th>
          <th className="border-r-2 bg-white px-6 py-3">Order number</th>
          <th className="border-r-2 bg-white px-6 py-3">Payment token</th>
          <th className="border-r-2 bg-white px-6 py-3">Amount</th>
          <th className="border-r-2 bg-white px-6 py-3">Payment status</th>
          <th className="border-r-2 bg-white px-6 py-3">Payment by</th>
          <th className="border-r-2 bg-white px-6 py-3">Date of payment</th>
        </thead>
        <tbody className="divide-y">
          <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="border-r-2 px-6 py-3">1</td>
            <td className="border-r-2 px-6 py-3">#3141432</td>
            <td className="border-r-2 px-6 py-3">7D6AF78DA87F6D8A7</td>
            <td className="border-r-2 px-6 py-3">2200.din</td>
            <td className="border-r-2 px-6 py-3">Completed</td>
            <td className="border-r-2 px-6 py-3">MasterCard</td>
            <td className="border-r-2 px-6 py-3">12 Avg 2023 10:28 pm</td>
          </tr>
          <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="border-r-2 px-6 py-3">1</td>
            <td className="border-r-2 px-6 py-3">#3141432</td>
            <td className="border-r-2 px-6 py-3">7D6AF78DA87F6D8A7</td>
            <td className="border-r-2 px-6 py-3">2200.din</td>
            <td className="border-r-2 px-6 py-3">Completed</td>
            <td className="border-r-2 px-6 py-3">MasterCard</td>
            <td className="border-r-2 px-6 py-3">12 Avg 2023 10:28 pm</td>
          </tr>
          <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="border-r-2 px-6 py-3">1</td>
            <td className="border-r-2 px-6 py-3">#3141432</td>
            <td className="border-r-2 px-6 py-3">7D6AF78DA87F6D8A7</td>
            <td className="border-r-2 px-6 py-3">2200.din</td>
            <td className="border-r-2 px-6 py-3">Completed</td>
            <td className="border-r-2 px-6 py-3">MasterCard</td>
            <td className="border-r-2 px-6 py-3">12 Avg 2023 10:28 pm</td>
          </tr>
          <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="border-r-2 px-6 py-3">1</td>
            <td className="border-r-2 px-6 py-3">#3141432</td>
            <td className="border-r-2 px-6 py-3">7D6AF78DA87F6D8A7</td>
            <td className="border-r-2 px-6 py-3">2200.din</td>
            <td className="border-r-2 px-6 py-3">Completed</td>
            <td className="border-r-2 px-6 py-3">MasterCard</td>
            <td className="border-r-2 px-6 py-3">12 Avg 2023 10:28 pm</td>
          </tr>
          <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="border-r-2 px-6 py-3">1</td>
            <td className="border-r-2 px-6 py-3">#3141432</td>
            <td className="border-r-2 px-6 py-3">7D6AF78DA87F6D8A7</td>
            <td className="border-r-2 px-6 py-3">2200.din</td>
            <td className="border-r-2 px-6 py-3">Completed</td>
            <td className="border-r-2 px-6 py-3">MasterCard</td>
            <td className="border-r-2 px-6 py-3">12 Avg 2023 10:28 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPaymentTable;
