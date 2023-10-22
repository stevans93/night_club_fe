import DashboardConfigSidebar from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardConfigSidebar";
import { useState, useEffect } from "react";
import DashboardGeneralConfig from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardGeneralConfig";
import DashboardTablesConfig from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardTablesConfig";
import ClubsService from "../../../../services/clubsService";
import DashboardSliderConfig from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardSliderConfig";
import DashboardAvaliableDays from "../../../../components/DashboardComponents/DashboardConfiguration/DashboardAvaliableDays";

const DashboardConfiguration = () => {
  const [showGeneral, setShowGeneral] = useState(true);
  const [showTables, setShowTables] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [showAvaliableDays, setShowAvaliableDays] = useState(false);

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;
  const userRole = ncUser ? ncUser.role : null;

  const [tables, setTables] = useState(null);
  const [dashboardSliderImages, setDashboardSliderImages] = useState(null);

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
    setShowSlider(false);
    setShowAvaliableDays(false);
  };

  const handleShowTables = () => {
    setShowTables(true);
    setShowGeneral(false);
    setShowSlider(false);
    setShowAvaliableDays(false);
  };

  const handleShowSlider = () => {
    setShowTables(false);
    setShowGeneral(false);
    setShowSlider(true);
    setShowAvaliableDays(false);
  };

  const handleShowAvaliableDays = () => {
    setShowTables(false);
    setShowGeneral(false);
    setShowSlider(false);
    setShowAvaliableDays(true);
  };

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const result = await ClubsService.getAllTables(
          clubId,
          undefined,
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
    if (userRole !== "admin") {
      fetchTables();
    }
  }, []);

  useEffect(() => {
    const fetchDashboardSliderImages = async () => {
      try {
        const result = await ClubsService.getAllDashboardSliderImages(clubId);

        setDashboardSliderImages(result.clubSliderImages);
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching tables:", error);
      }
    };
    if (userRole !== "admin") {
      fetchDashboardSliderImages();
    }
  }, []);

  return (
    <div className="flex bg-[#F9F9F9] h-[calc(100vh-70px)]">
      <DashboardConfigSidebar
        onShowGeneral={handleShowGeneral}
        onShowTables={handleShowTables}
        onShowSlider={handleShowSlider}
        onShowAvaliableDays={handleShowAvaliableDays}
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
      {showSlider && dashboardSliderImages && (
        <DashboardSliderConfig dashboardSliderImages={dashboardSliderImages} />
      )}

      {showAvaliableDays && <DashboardAvaliableDays />}
    </div>
  );
};

export default DashboardConfiguration;
