import DashboardLiveOrders from "./DashboardLiveOrders/DashboardLiveOrders";
import DashboardTables from "./DashboardTables/DashboardTables";

const DashboardLiveTables = () => {
  return (
    <div className="flex w-full mt-10 gap-5 p-3">
      <DashboardTables />
      <DashboardLiveOrders />
    </div>
  );
};

export default DashboardLiveTables;
