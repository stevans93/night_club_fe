import DashboardStaffListTable from "../DashboardTables/DashboardStaffListTable/DashboardStaffListTable";

const DashStaff = (props) => {
  return (
    <div className="flex flex-wrap gap-10 mt-10 ml-2">
      <DashboardStaffListTable
        handleEditStaffModalOpen={props.handleEditStaffModalOpen}
        staff={props.staff}
        handleDelete={props.handleDelete}
        handleResetStaffPasswordModalOpen={
          props.handleResetStaffPasswordModalOpen
        }
      />
    </div>
  );
};

export default DashStaff;
