import DashboardConfigSidebar from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardConfigSidebar";
import { useState } from "react";
import DashboardGeneralConfig from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardGeneralConfig";
import DashboardTablesConfig from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardTablesConfig";

const DashboardConfiguration = () => {
  const [showGeneral, setShowGeneral] = useState(true);
  const [showTables, setShowTables] = useState(false);

  const handleShowGeneral = () => {
    setShowGeneral(true);
    setShowTables(false);
  };

  const handleShowTables = () => {
    setShowTables(true);
    setShowGeneral(false);
  };

  

  return (
    <div className="flex">
      <DashboardConfigSidebar
        onShowGeneral={handleShowGeneral}
        onShowTables={handleShowTables}
      />
      {showGeneral && <DashboardGeneralConfig />}
      {showTables && <DashboardTablesConfig />}
    </div>
  );
};

export default DashboardConfiguration;
