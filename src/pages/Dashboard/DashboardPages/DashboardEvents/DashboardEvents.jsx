import React from "react";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import { useState, useEffect } from "react";
import EventService from "../../../../services/eventsService";
import { showToast } from "../../../../helpers/toast";
import EventHeader from "../../../../components/DashboardComponents/DashboardHeaders/EventHeader/EventHeader";
import DashboardEventsTable from "../../../../components/DashboardComponents/DashboardTables/DashboardEventsTable/DashboardEventsTable";
import AddEventForm from "../../../../components/DashboardComponents/DashboardForms/AddEventForm/AddEventForm";
import EditEventForm from "../../../../components/DashboardComponents/DashboardForms/EditEventForm/EditEventForm";

const DashboardEvents = () => {
  const pageSizeOptions = [15, 30, 45];
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfEvents, setNumberOfEvents] = useState();
  const [events, setEvents] = useState(null);

  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: pageSizeOptions[0],
  });

  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
  const [isEditEventModalOpen, setIsEditEventModalOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const handleEditModalOpen = async (id) => {
    console.log("here", id);
    await fetchEventById(id);
    setIsEditEventModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditEventModalOpen(false);
  };

  const handleEventModalOpen = () => {
    setIsAddEventModalOpen(true);
  };

  const handleEventModalClose = () => {
    setIsAddEventModalOpen(false);
  };

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

  const handleDelete = async (id) => {
    await fetchDeleteEventById(id);
  };

  const fetchEventById = async (id) => {
    try {
      const response = await EventService.getSingleEvent(id);

      if (response) {
        // Handle success
        setEventToEdit(response); // Assuming setEventToEdit is a state updater function
        showToast("Event fetched successfully", "success");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        showToast("Failed to fetch event", "error");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while fetching the event:", error);
      showToast("Error: An error occurred while fetching the event", "error");
    }
  };

  const fetchDeleteEventById = async (id) => {
    try {
      const response = await EventService.deleteEvent(id);

      if (response) {
        // Handle success
        console.log("Event deleted successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.error("Failed to delete event");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while deleting the event:", error);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await EventService.getAllEvents(
          selectedParams.pageNumber,
          selectedParams.pageSize
          // Include other parameters as needed
        );

        if (eventsData) {
          setEvents(eventsData.events);
          setNumberOfPages(eventsData.numberOfPages);
          setNumberOfEvents(eventsData.numberOfEvents);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching events:", error);
      }
    };

    fetchEvents();
  }, [selectedParams]);

  return (
    <div className="bg-[#F9F9F9] pt-5 h-full px-3 py-10 shadow-lg">
      <EventHeader
        pageSizeOptions={pageSizeOptions}
        pageSize={selectedParams.pageSize}
        handlePageSizeChange={handlePageSizeChange}
        handleEventModalOpen={handleEventModalOpen}
      />

      {events && (
        <DashboardEventsTable
          events={events}
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
        numberOfItems={numberOfEvents}
        selectedParams={selectedParams}
      />

      <AddEventForm
        isAddEventModalOpen={isAddEventModalOpen}
        handleEventModalClose={handleEventModalClose}
      />

      {eventToEdit && (
        <EditEventForm
          isEditEventModalOpen={isEditEventModalOpen}
          handleEditModalClose={handleEditModalClose}
          event={eventToEdit}
        />
      )}
    </div>
  );
};

export default DashboardEvents;
