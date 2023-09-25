import React from "react";
import CouponHeader from "../../../../components/DashboardComponents/DashboardHeaders/CouponHeader/CouponHeader";
import DashboardCouponTable from "../../../../components/DashboardComponents/DashboardTables/DashboardCouponTable/DashboardCouponTable";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import { useState, useEffect } from "react";
import AddCouponForm from "../../../../components/DashboardComponents/DashboardForms/AddCouponForm/AddCouponForm";
import EditCouponForm from "../../../../components/DashboardComponents/DashboardForms/EditCouponForm/EditCouponForm";

function DashboardCoupon() {
  const pageSizeOptions = [15, 30, 45];
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfCoupons, setNumberOfCoupons] = useState();
  const [coupons, setCoupons] = useState(null);

  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: pageSizeOptions[0],
  });

  const [isAddCouponModalOpen, setIsAddCouponModalOpen] = useState(false);
  const [isEditCouponModalOpen, setIsEditCouponModalOpen] = useState(false);
  const [couponToEdit, setCouponToEdit] = useState(null);

  const handleEditModalOpen = async (id) => {
    console.log("here", id);
    await fetchCouponById(id);
    setIsEditCouponModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditCouponModalOpen(false);
  };

  const handleCouponModalOpen = () => {
    setIsAddCouponModalOpen(true);
  };

  const handleCouponModalClose = () => {
    setIsAddCouponModalOpen(false);
  };

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

  const handleDelete = async (id) => {
    await fetchDeleteCouponById(id);
  };

  const fetchCouponById = async (id) => {
    const token = localStorage.getItem("nc_token");
    const response = await fetch(
      `http://localhost:4000/api/coupons/singleCoupon/${id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    const json = await response.json();

    if (response.ok) {
      setCouponToEdit(json);
    }
  };

  const fetchDeleteCouponById = async (id) => {
    const token = localStorage.getItem("nc_token");
    const response = await fetch(
      `http://localhost:4000/api/coupons/deleteCoupon/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    if (response.ok) {
      console.log("deleted");
    }
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
      const token = localStorage.getItem("nc_token");
      const response = await fetch(
        `http://localhost:4000/api/coupons/allCoupons/${queryString}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
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
    <div className="bg-[#F9F9F9] pt-5 h-full px-3 py-10 shadow-lg">
      <CouponHeader
        pageSizeOptions={pageSizeOptions}
        pageSize={selectedParams.pageSize}
        handlePageSizeChange={handlePageSizeChange}
        handleCouponModalOpen={handleCouponModalOpen}
      />
      {coupons && (
        <DashboardCouponTable
          coupons={coupons}
          pageSize={selectedParams.pageSize}
          pageNumber={selectedParams.pageNumber}
          handleEditModalOpen={handleEditModalOpen}
          handleDelete={handleDelete}
        />
      )}
      <TablePagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        pageSize={selectedParams.pageSize}
        numberOfPages={numberOfPages}
        numberOfItems={numberOfCoupons}
        selectedParams={selectedParams}
      />
      <AddCouponForm
        isAddCouponModalOpen={isAddCouponModalOpen}
        handleCouponModalClose={handleCouponModalClose}
      />

      {couponToEdit && (
        <EditCouponForm
          isEditCouponModalOpen={isEditCouponModalOpen}
          handleEditModalClose={handleEditModalClose}
          coupon={couponToEdit}
        />
      )}
    </div>
  );
}

export default DashboardCoupon;
