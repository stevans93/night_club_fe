const DashboardPremissionTable = () => {
  return (
    <div className="flex flex-col ml-2 bg-white w-fit rounded-lg px-2 h-full pb-10 w-4/12">
      <div className="flex border-b-2 w-full h-14 items-center">
        <span>Premission list</span>
      </div>
      <div className="relative overflow-auto shadow-md rounded-lg mt-10 mt-2">
        <table className="text-sm text-left text-gray-500 overflow-x-scroll">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
            <th className="border-r-2 bg-white px-6 py-3">#</th>
            <th className="border-r-2 bg-white px-6 py-3 w-full">Title</th>
          </thead>
          <tbody className="divide-y">
            <tr className="bg-white  ">
              <td className="border-r-2 px-6 py-3 align-baseline">1</td>
              <td className="border-r-2 px-6 py-3 align-baseline">
                Reservation
              </td>
            </tr>
            <tr className="bg-white  ">
              <td className="border-r-2 px-6 py-3 align-baseline">2</td>
              <td className="border-r-2 px-6 py-3 align-baseline">
                Payment history
              </td>
            </tr>
            <tr className="bg-white  ">
              <td className="border-r-2 px-6 py-3 align-baseline">3</td>
              <td className="border-r-2 px-6 py-3 align-baseline">
                Live order
              </td>
            </tr>
            <tr className="bg-white  ">
              <td className="border-r-2 px-6 py-3 align-baseline">4</td>
              <td className="border-r-2 px-6 py-3 align-baseline">
                Coupon list
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPremissionTable;
