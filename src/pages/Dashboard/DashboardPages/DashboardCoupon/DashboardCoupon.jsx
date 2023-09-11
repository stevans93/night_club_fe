import React from "react";
import CouponHeader from "../../../../components/DashboardComponents/DashboardHeaders/CouponHeader/CouponHeader";
import DashboardCouponTable from "../../../../components/DashboardComponents/DashboardTables/DashboardCouponTable/DashboardCouponTable";

function DashboardCoupon() {
  return (
    <div className="bg-gray-600 pt-5 h-full">
      <CouponHeader />
      <DashboardCouponTable />
    </div>
  );
}

export default DashboardCoupon;
