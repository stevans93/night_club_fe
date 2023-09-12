import DashboardPremissionTable from "../DashboardTables/DashboardPremissionTable/DashboardPremissionTable";
import DashboardStaffListTable from "../DashboardTables/DashboardStaffListTable/DashboardStaffListTable";

const DashStaff = () => {
  return (
    <div className="flex flex-wrap gap-10 mt-10 ml-2">
      <DashboardStaffListTable />
      <DashboardPremissionTable />
    </div>
  );
};

export default DashStaff;
