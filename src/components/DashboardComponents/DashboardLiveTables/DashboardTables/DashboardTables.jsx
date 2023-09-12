import DashboardTablesBody from "./DashboardTablesBody/DashboardTablesBody";
import DashboardTablesHeader from "./DashboardTablesHeader/DashboardTablesHeader";

const DashboardTables = () => {
  return (
    <div className="w-9/12 rounded-xl bg-white">
      <DashboardTablesHeader />
      <DashboardTablesBody />
    </div>
  );
};

export default DashboardTables;
