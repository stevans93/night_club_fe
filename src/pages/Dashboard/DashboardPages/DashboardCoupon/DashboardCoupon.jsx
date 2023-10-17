import React from "react";
import CouponHeader from "../../../../components/DashboardComponents/DashboardHeaders/CouponHeader/CouponHeader";
import DashboardCouponTable from "../../../../components/DashboardComponents/DashboardTables/DashboardCouponTable/DashboardCouponTable";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import { useState, useEffect } from "react";
import AddCouponForm from "../../../../components/DashboardComponents/DashboardForms/AddCouponForm/AddCouponForm";
import EditCouponForm from "../../../../components/DashboardComponents/DashboardForms/EditCouponForm/EditCouponForm";
import CouponsService from "../../../../services/couponsService";

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
    try {
      const response = await CouponsService.getSingleCoupon(id);

      if (response) {
        // Handle success
        setCouponToEdit(response); // Assuming setCouponToEdit is a state updater function

        console.log("Coupon fetched successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to fetch coupon");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while fetching the coupon:", error);
    }
  };

  const fetchDeleteCouponById = async (id) => {
    try {
      const response = await CouponsService.deleteCoupon(id);

      if (response) {
        // Handle success
        console.log("Coupon deleted successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.error("Failed to delete coupon");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while deleting the coupon:", error);
    }
  };

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const couponsData = await CouponsService.getAllCoupons(
          selectedParams.pageNumber,
          selectedParams.pageSize
          // Include other parameters as needed
        );

        if (couponsData) {
          setCoupons(couponsData.coupons);
          setNumberOfPages(couponsData.numberOfPages);
          setNumberOfCoupons(couponsData.numberOfCoupons);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching coupons:", error);
      }
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
