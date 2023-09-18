import React from "react";
import CouponHeader from "../../../../components/DashboardComponents/DashboardHeaders/CouponHeader/CouponHeader";
import DashboardCouponTable from "../../../../components/DashboardComponents/DashboardTables/DashboardCouponTable/DashboardCouponTable";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import { useState, useEffect } from "react";

function DashboardCoupon() {
  const pageSizeOptions = [15, 30, 45];
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfCoupons, setNumberOfCoupons] = useState();
  const [coupons, setCoupons] = useState(null);

  const [selectedParams, setSelectedParams] = useState({
    table: "",
    status: "",
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

  useEffect(() => {
    const fetchCoupons = async () => {
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
      const response = await fetch(
        `http://localhost:4000/api/coupons/allCoupons/${queryString}`
      );
      const json = await response.json();

      if (response.ok) {
        setCoupons(json.coupons);
      }

      setNumberOfPages(json.numberOfPages);
      setNumberOfCoupons(json.numberOfCoupons);
    };

    fetchCoupons();
  }, [selectedParams]);

  return (
    <div className="bg-gray-600 pt-5 h-full">
      <CouponHeader
        pageSizeOptions={pageSizeOptions}
        pageSize={selectedParams.pageSize}
        handlePageSizeChange={handlePageSizeChange}
      />
      {coupons && (
        <DashboardCouponTable
          coupons={coupons}
          pageSize={selectedParams.pageSize}
          pageNumber={selectedParams.pageNumber}
        />
      )}
      <TablePagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        pageSize={selectedParams.pageSize}
        numberOfPages={numberOfPages}
        numberOfCoupons={numberOfCoupons}
        selectedParams={selectedParams}
      />
    </div>
  );
}

export default DashboardCoupon;
