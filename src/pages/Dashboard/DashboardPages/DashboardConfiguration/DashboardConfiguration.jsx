import DashboardConfigSidebar from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardConfigSidebar";
import { useState, useEffect } from "react";
import DashboardGeneralConfig from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardGeneralConfig";
import DashboardTablesConfig from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardTablesConfig";
import ClubsService from "../../../../services/clubsService";

const DashboardConfiguration = () => {
  const [showGeneral, setShowGeneral] = useState(true);
  const [showTables, setShowTables] = useState(false);

  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfTables, setNumberOfTables] = useState();

  const pageSizeOptions = [15, 30, 45];

  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: pageSizeOptions[0],
  });

  const handleShowGeneral = () => {
    setShowGeneral(true);
    setShowTables(false);
  };

  const handleShowTables = () => {
    setShowTables(true);
    setShowGeneral(false);
  };

  const [tables, setTables] = useState(null);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const result = await ClubsService.getAllTables(
          selectedParams.pageNumber,
          selectedParams.pageSize
        );

        setTables(result.tables);

        if (setNumberOfPages) {
          setNumberOfPages(result.numberOfPages);
        }
        if (setNumberOfTables) {
          setNumberOfTables(result.numberOfTables);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching tables:", error);
      }
    };

    fetchTables();
  }, []);

  return (
    <div className="flex bg-[#F9F9F9] h-[calc(100vh-70px)]">
      <DashboardConfigSidebar
        onShowGeneral={handleShowGeneral}
        onShowTables={handleShowTables}
      />
      {showGeneral && <DashboardGeneralConfig />}
      {showTables && tables && (
        <DashboardTablesConfig
          tables={tables}
          pageSizeOptions={pageSizeOptions}
          selectedParams={selectedParams}
          numberOfPages={numberOfPages}
          numberOfTables={numberOfTables}
          setSelectedParams={setSelectedParams}
        />
      )}
    </div>
  );
};

export default DashboardConfiguration;
