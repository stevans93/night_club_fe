import ClubsHeader from "../../../../components/DashboardComponents/DashboardHeaders/ClubsHeader/ClubsHeader";
import { useState, useEffect } from "react";
import ClubsService from "../../../../services/clubsService";
import DashboardClubsTable from "../../../../components/DashboardComponents/DashboardTables/DashboardClubTable/DashboardClubTable";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import EditClubForm from "../../../../components/DashboardComponents/DashboardForms/EditClubForm/EditClubForm";

const DashboardClubs = () => {
  const [clubs, setClubs] = useState(null);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfClubs, setNumberOfClubs] = useState();
  const pageSizeOptions = [15, 30, 45];

  const [isEditClubModalOpen, setIsEditClubModalOpen] = useState(false);
  const [clubToEdit, setClubToEdit] = useState(null);

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;

  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: pageSizeOptions[0],
  });

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const clubsData = await ClubsService.getAllClubs(
          selectedParams.pageNumber,
          selectedParams.pageSize,
          selectedParams.name,
          selectedParams.location,
          selectedParams.bannerImage,
          selectedParams.date,
          selectedParams.type
        );

        setClubs(clubsData.clubs);

        if (setNumberOfPages) {
          setNumberOfPages(clubsData.numberOfPages);
        }
        if (setNumberOfClubs) {
          setNumberOfClubs(clubsData.numberOfClubs);
        }
      } catch (error) {
        // Handle any errors here
      }
    };

    fetchClubs();
  }, [selectedParams]);

  const fetchClubById = async (clubId) => {
    if (clubId) {
      try {
        const response = await ClubsService.getSingleClub(clubId);
        setClubToEdit(response);
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching club info:", error);
      }
    }
  };

  useEffect(() => {
    fetchClubById();
  }, [clubId]);

  const fetchDeleteClubById = async (id) => {
    try {
      const response = await ClubsService.deleteClub(id);

      if (response) {
        // Handle success
        console.log("club deleted successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.error("Failed to delete club");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while deleting the club:", error);
    }
  };

  const handleDelete = async (id) => {
    await fetchDeleteClubById(id);
    setClubs(clubs.filter((e) => e._id !== id))
  };

  const handleEditModalClose = () => {
    setIsEditClubModalOpen(false);
  };

  const handleEditModalOpen = async (id) => {
    await fetchClubById(id);
    setIsEditClubModalOpen(true);
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

  return (
    <>
      <ClubsHeader pageSizeOptions={pageSizeOptions} />
      {clubs && (
        <DashboardClubsTable
          clubs={clubs}
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
        numberOfItems={numberOfClubs}
        selectedParams={selectedParams}
      />

      {clubToEdit && (
        <EditClubForm
          isEditClubModalOpen={isEditClubModalOpen}
          handleEditModalClose={handleEditModalClose}
          club={clubToEdit}
        />
      )}
    </>
  );
};

export default DashboardClubs;
