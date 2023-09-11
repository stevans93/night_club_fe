import React from "react";
import PaymentHeader from "../../../../components/DashboardComponents/DashboardHeaders/PaymentHeader/PaymentHeader";
import DashboardPaymentTable from "../../../../components/DashboardComponents/DashboardTables/DashboardPaymentTable/DashboardPaymentTable";

function DashboardPayment() {
  return (
    <div className="bg-gray-600 pt-5 h-full">
      <PaymentHeader />
      <DashboardPaymentTable />
    </div>
  );
}

export default DashboardPayment;
