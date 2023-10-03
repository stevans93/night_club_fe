import DashboardConfigSidebar from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardConfigSidebar";
import { useState, useEffect } from "react";
import DashboardGeneralConfig from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardGeneralConfig";
import DashboardTablesConfig from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardTablesConfig";
import ClubsService from "../../../../services/clubsService";

const DashboardConfiguration = () => {
  const [showGeneral, setShowGeneral] = useState(true);
  const [showTables, setShowTables] = useState(false);

  const pageSizeOptions = [15, 30, 45];

  const [selectedParams, setSelectedParams] = useState({
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

  const handleShowGeneral = () => {
    setShowGeneral(true);
    setShowTables(false);
  };

  const handleShowTables = () => {
    setShowTables(true);
    setShowGeneral(false);
  };

  const [tables, setTables] = useState(null);

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;

  useEffect(() => {
    const fetchTables = async (clubId) => {
      try {
        const response = await ClubsService.getTable(clubId);

        if (response) {
          // Handle success
          setTables(response.tables); // Assuming setTables is a state updater function
          showToast("Coupon fetched successfully", "success");
          // You can perform additional actions if needed
        } else {
          // Handle failure
          showToast("Failed to fetch coupon", "error");
          // You can perform additional actions if needed
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching the coupon:", error);
        showToast(
          "Error: An error occurred while fetching the coupon",
          "error"
        );
      }
    };
    fetchTables();
  }, [clubId]);

  return (
    <div className="flex">
      <DashboardConfigSidebar
        onShowGeneral={handleShowGeneral}
        onShowTables={handleShowTables}
      />
      {showGeneral && <DashboardGeneralConfig />}
      {showTables && <DashboardTablesConfig tables={tables} />}
    </div>
  );
};

export default DashboardConfiguration;
