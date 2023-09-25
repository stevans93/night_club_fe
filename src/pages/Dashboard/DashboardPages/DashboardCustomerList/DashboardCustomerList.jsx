import React from "react";
import CustomerHeader from "../../../../components/DashboardComponents/DashboardHeaders/CustomerHeader/CustomerHeader";
import DashboardCustomerTable from "../../../../components/DashboardComponents/DashboardTables/DashboardCustomerTable/DashboardCustomerTable";
import { useState, useEffect } from "react";
import TablePagination from "../../../../components/TablePagination/TablePagination";

function DashboardCustomerList() {
  const pageSizeOptions = [15, 30, 45];
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfCustomers, setNumberOfCustomers] = useState();
  const [customers, setCustomers] = useState(null);

  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: pageSizeOptions[0],
  });

  const handlePageSizeChange = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageSize: value,
      pageNumber: 1,
    }));
  };

  const handleNextPage = () => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageNumber: selectedParams.pageNumber + 1,
    }));
  };

  const handlePreviousPage = () => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageNumber: selectedParams.pageNumber - 1,
    }));
  };

  const handleChangeName = (value) => {
    console.log(value);
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      name: value,
    }));
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      let queryString = ``;
      if (selectedParams) {
        for (const [index, [key, value]] of Object.entries(
          selectedParams
        ).entries()) {
          if (index === 0) {
            queryString += `?${key}=${value}`;
          } else {
            queryString += `&${key}=${value}`;
          }
        }
      }
      const token = localStorage.getItem("nc_token");
      const response = await fetch(
        `http://localhost:4000/api/clubCustomers/allCustomers/${queryString}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setCustomers(json.customers);
      }

      setNumberOfPages(json.numberOfPages);
      setNumberOfCustomers(json.numberOfCustomers);
    };

    fetchCustomers();
  }, [selectedParams]);
  return (
    <div className="bg-[#F9F9F9] pt-5 h-full px-3 py-10 shadow-lg">
      <CustomerHeader
        pageSizeOptions={pageSizeOptions}
        pageSize={selectedParams.pageSize}
        handlePageSizeChange={handlePageSizeChange}
        handleChangeName={handleChangeName}
      />

      {customers && (
        <DashboardCustomerTable
          customers={customers}
          pageSize={selectedParams.pageSize}
          pageNumber={selectedParams.pageNumber}
        />
      )}

      <TablePagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        pageSize={selectedParams.pageSize}
        numberOfPages={numberOfPages}
        numberOfItems={numberOfCustomers}
        selectedParams={selectedParams}
      />
    </div>
  );
}

export default DashboardCustomerList;
