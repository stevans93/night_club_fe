const DashboardCustomerTable = (props) => {
  return (
    <>
      <div className="relative shadow-lg rounded-lg mt-10 overflow-auto">
        <table className="w-full text-sm text-left text-gray-500 overflow-x-scroll">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
            <th className="border-r-2 bg-white px-6 py-3">SI</th>
            <th className="border-r-2 bg-white px-6 py-3">Korisnički ID</th>
            <th className="border-r-2 bg-white px-6 py-3">Ime</th>
            <th className="border-r-2 bg-white px-6 py-3">Mobilni Telefon</th>
            <th className="border-r-2 bg-white px-6 py-3">E-mail Adresa</th>
            <th className="border-r-2 bg-white px-6 py-3">Ukupan Broj Rezervacija</th>
          </thead>
          <tbody className="divide-y">
            {props.customers.map((customer, i) => {
              return (
                <tr
                  key={customer._id}
                  className="bg-white  "
                >
                  <td className="border-r-2 px-6 py-3">
                    {i + 1 + props.pageSize * (props.pageNumber - 1)}
                  </td>
                  <td className="border-r-2 px-6 py-3">{customer._id}</td>
                  <td className="border-r-2 px-6 py-3">{customer.name}</td>
                  <td className="border-r-2 px-6 py-3">
                    {customer.mobilePhone}
                  </td>
                  <td className="border-r-2 px-6 py-3">{customer.email}</td>
                  <td className="border-r-2 px-6 py-3">
                    {customer.totalReservations}
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

export default DashboardCustomerTable;
