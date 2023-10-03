import React from "react";
import CustomerHeader from "../../../../components/DashboardComponents/DashboardHeaders/CustomerHeader/CustomerHeader";
import DashboardCustomerTable from "../../../../components/DashboardComponents/DashboardTables/DashboardCustomerTable/DashboardCustomerTable";
import { useState, useEffect } from "react";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import ClubCustomersService from "../../../../services/clubCustomersService";

function DashboardCustomerList() {
  const pageSizeOptions = [15, 30, 45];
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfCustomers, setNumberOfCustomers] = useState();
  const [customers, setCustomers] = useState(null);
  const [customersToExport, setCustomersForExport] = useState();

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
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      name: value,
    }));
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        // Fetch customers using ClubCustomersService
        const customersData = await ClubCustomersService.getAllCustomers(
          selectedParams.pageNumber,
          selectedParams.pageSize,
          selectedParams.name,
          selectedParams.email,
          selectedParams.mobilePhone
        );

        // Update state with the fetched customer data
        setCustomers(customersData.customers);

        const toExp = customersData.customers.map((x) => ({
          name: x.name,
          phone: x.mobilePhone,
          email: x.email,
        }));
        setCustomersForExport(toExp);

        if (setNumberOfPages) {
          setNumberOfPages(customersData.numberOfPages);
        }
        if (setNumberOfCustomers) {
          setNumberOfCustomers(customersData.numberOfCustomers);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []); // Since 'selectedParams' comes from state, you may not need to include it in the dependency array
  return (
    <div className="bg-[#F9F9F9] pt-5 h-full px-3 py-10 shadow-lg">
      {customersToExport && (
        <CustomerHeader
          pageSizeOptions={pageSizeOptions}
          pageSize={selectedParams.pageSize}
          handlePageSizeChange={handlePageSizeChange}
          handleChangeName={handleChangeName}
          data={customersToExport}
        />
      )}

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
