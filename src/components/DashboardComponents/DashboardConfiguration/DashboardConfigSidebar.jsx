const DashboardConfigSidebar = (props) => {
  return (
    <div className="flex flex-col w-2/12 h-[calc(100vh-70px)] border-r-2">
      <button
        onClick={props.onShowGeneral}
        className="flex px-2 py-4 bg-gray-300"
      >
        General
      </button>
      <button
        onClick={props.onShowTables}
        className="flex px-2 py-4 bg-gray-400"
      >
        Tables
      </button>
    </div>
  );
};

export default DashboardConfigSidebar;
