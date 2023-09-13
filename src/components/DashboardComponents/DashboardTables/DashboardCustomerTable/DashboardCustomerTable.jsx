import ActiveButton from "../../../Buttons/ActiveButton/ActiveButton";
import DeleteButton from "../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../Buttons/EditButton/EditButton";
import LockButton from "../../../Buttons/LockButton/LockButton";
import EditCustomerForm from "../../DashboardForms/EditCustomerForm/EditCustomerForm";
import { useState } from "react";

const DashboardCustomerTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg mt-10 ml-3 mr-3">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2">
            <th className="border-r-2 bg-white px-6 py-3">SI</th>
            <th className="border-r-2 bg-white px-6 py-3">Customer ID</th>
            <th className="border-r-2 bg-white px-6 py-3">Name</th>
            <th className="border-r-2 bg-white px-6 py-3">Phone</th>
            <th className="border-r-2 bg-white px-6 py-3">Email</th>
            <th className="border-r-2 bg-white px-6 py-3">Total orders</th>
            <th className="border-r-2 bg-white px-6 py-3">Status</th>
            <th className="border-r-2 bg-white px-6 py-3">Action</th>
          </thead>
          <tbody className="divide-y">
            <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <td className="border-r-2 px-6 py-3">1</td>
              <td className="border-r-2 px-6 py-3">#3141</td>
              <td className="border-r-2 px-6 py-3">Pera Peric</td>
              <td className="border-r-2 px-6 py-3">063-563-632</td>
              <td className="border-r-2 px-6 py-3">peraperic@gmail.com</td>
              <td className="border-r-2 px-6 py-3">12</td>
              <td className="border-r-2 px-6 py-3">
                <ActiveButton text="Verified" />
              </td>
              <td className="flex gap-1 border-r-2 px-6 py-3">
                <LockButton />
                <EditButton onClick={handleOpenModal} />
                <DeleteButton />
              </td>
            </tr>
            <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <td className="border-r-2 px-6 py-3">1</td>
              <td className="border-r-2 px-6 py-3">#3141</td>
              <td className="border-r-2 px-6 py-3">Pera Peric</td>
              <td className="border-r-2 px-6 py-3">063-563-632</td>
              <td className="border-r-2 px-6 py-3">peraperic@gmail.com</td>
              <td className="border-r-2 px-6 py-3">12</td>
              <td className="border-r-2 px-6 py-3">
                <ActiveButton text="Verified" />
              </td>
              <td className="flex gap-1 border-r-2 px-6 py-3">
                <LockButton />
                <EditButton onClick={handleOpenModal} />
                <DeleteButton />
              </td>
            </tr>
            <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <td className="border-r-2 px-6 py-3">1</td>
              <td className="border-r-2 px-6 py-3">#3141</td>
              <td className="border-r-2 px-6 py-3">Pera Peric</td>
              <td className="border-r-2 px-6 py-3">063-563-632</td>
              <td className="border-r-2 px-6 py-3">peraperic@gmail.com</td>
              <td className="border-r-2 px-6 py-3">12</td>
              <td className="border-r-2 px-6 py-3">
                <ActiveButton text="Verified" />
              </td>
              <td className="flex gap-1 border-r-2 px-6 py-3">
                <LockButton />
                <EditButton onClick={handleOpenModal} />
                <DeleteButton />
              </td>
            </tr>
            <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <td className="border-r-2 px-6 py-3">1</td>
              <td className="border-r-2 px-6 py-3">#3141</td>
              <td className="border-r-2 px-6 py-3">Pera Peric</td>
              <td className="border-r-2 px-6 py-3">063-563-632</td>
              <td className="border-r-2 px-6 py-3">peraperic@gmail.com</td>
              <td className="border-r-2 px-6 py-3">12</td>
              <td className="border-r-2 px-6 py-3">
                <ActiveButton text="Verified" />
              </td>
              <td className="flex gap-1 border-r-2 px-6 py-3">
                <LockButton />
                <EditButton onClick={handleOpenModal} />
                <DeleteButton />
              </td>
            </tr>
            <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <td className="border-r-2 px-6 py-3">1</td>
              <td className="border-r-2 px-6 py-3">#3141</td>
              <td className="border-r-2 px-6 py-3">Pera Peric</td>
              <td className="border-r-2 px-6 py-3">063-563-632</td>
              <td className="border-r-2 px-6 py-3">peraperic@gmail.com</td>
              <td className="border-r-2 px-6 py-3">12</td>
              <td className="border-r-2 px-6 py-3">
                <ActiveButton text="Verified" />
              </td>
              <td className="flex gap-1 border-r-2 px-6 py-3">
                <LockButton />
                <EditButton onClick={handleOpenModal} />
                <DeleteButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <EditCustomerForm
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default DashboardCustomerTable;
