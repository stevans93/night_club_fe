import ActiveButton from "../../../Buttons/ActiveButton/ActiveButton";
import DeleteButton from "../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../Buttons/EditButton/EditButton";

const DashboardCouponTable = (props) => {
  return (
    <>
      <div className="relative shadow-lg rounded-lg mt-10">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
            <th className="border-r-2 bg-white px-6 py-3">#</th>
            <th className="border-r-2 bg-white px-6 py-3">Naslov</th>
            <th className="border-r-2 bg-white px-6 py-3">Kod Kupona</th>
            <th className="border-r-2 bg-white px-6 py-3">Limit</th>
            <th className="border-r-2 bg-white px-6 py-3">Koristi Se</th>
            <th className="border-r-2 bg-white px-6 py-3">Popust</th>
            <th className="border-r-2 bg-white px-6 py-3">Pocetni Datum</th>
            <th className="border-r-2 bg-white px-6 py-3">Krajnji Datum</th>
            <th className="border-r-2 bg-white px-6 py-3">Status</th>
            <th className="border-r-2 bg-white px-6 py-3">Opcije</th>
          </thead>
          <tbody className="divide-y">
            {props.coupons.map((coupon, i) => {
              return (
                <tr
                  key={coupon._id}
                  className="bg-white  "
                >
                  <td className="border-r-2 px-6 py-3">
                    {i + 1 + props.pageSize * (props.pageNumber - 1)}
                  </td>
                  <td className="border-r-2 px-6 py-3">{coupon.title}</td>
                  <td className="border-r-2 px-6 py-3">{coupon.code}</td>
                  <td className="border-r-2 px-6 py-3">{coupon.limit}</td>
                  <td className="border-r-2 px-6 py-3">{coupon.used}</td>
                  <td className="border-r-2 px-6 py-3">{coupon.discount}</td>
                  <td className="border-r-2 px-6 py-3">{coupon.startDate}</td>
                  <td className="border-r-2 px-6 py-3">{coupon.endDate}</td>
                  <td className="border-r-2 px-6 py-3">
                    <ActiveButton
                      text={coupon.status ? "Active" : "Inactive"}
                    />
                  </td>
                  <td className="flex border-r-2 px-6 py-3 gap-2">
                    <EditButton
                      onClick={() => props.handleEditModalOpen(coupon._id)}
                    />
                    <DeleteButton
                      onClick={() => props.handleDelete(coupon._id)}
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

export default DashboardCouponTable;
