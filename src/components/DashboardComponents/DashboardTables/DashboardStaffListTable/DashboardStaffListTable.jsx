import DeleteButton from "../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../Buttons/EditButton/EditButton";
import LockButton from "../../../Buttons/LockButton/LockButton";
const DashboardStaffListTable = (props) => {
  return (
    <>
      <div className="relative rounded-lg w-10/12 bg-white shadow-lg">
        <div className="flex border-b-2 w-full h-14 items-center px-3">
          <span>Spisak Osoblja</span>
        </div>
        <div className="relative overflow-auto shadow-md rounded-lg mt-10 mt-2">
          <table className="w-full text-sm text-left text-gray-500 overflow-x-scroll">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
              <th className="border-r-2 bg-white px-6 py-3">SI</th>
              <th className="border-r-2 bg-white px-6 py-3">Ime</th>
              <th className="border-r-2 bg-white px-6 py-3">E-mail Adresa</th>
              <th className="border-r-2 bg-white px-6 py-3">Dozvola</th>
              <th className="bg-white px-6 py-3">Opcije</th>
            </thead>
            <tbody className="divide-y">
              {props.staff.map((staff, i) => {
                return (
                  <tr
                    key={staff._id}
                    className="bg-white  "
                  >
                    <td className="border-r-2 px-6 py-3">{i++ + 1}</td>
                    <td className="border-r-2 px-6 py-3">
                      {staff.firstName + " " + staff.lastName}
                    </td>
                    <td className="border-r-2 px-6 py-3">{staff.email}</td>
                    <td className="border-r-2 px-6 py-3">
                      <table>
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
                          <th className="border-2 bg-white px-6 py-3">SI</th>
                          <th className="border-2 bg-white px-6 py-3">Name</th>
                        </thead>
                        {
                          <tbody className="divide-y">
                            {staff.permissions.map((permission, i) => {
                              return (
                                <tr
                                  key={i++}
                                  className="bg-white  "
                                >
                                  <td className="border-2 px-6 py-3">
                                    {i++ + 1}
                                  </td>
                                  <td className="border-2 px-6 py-3">
                                    {permission}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        }
                      </table>
                    </td>

                    <td className="flex gap-1 px-6 py-3 align-baseline">
                      <LockButton
                        onClick={() =>
                          props.handleResetStaffPasswordModalOpen(staff._id)
                        }
                      />
                      <EditButton
                        onClick={() =>
                          props.handleEditStaffModalOpen(staff._id)
                        }
                      />
                      <DeleteButton
                        onClick={() => props.handleDelete(staff._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardStaffListTable;
