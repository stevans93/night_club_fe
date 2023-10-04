import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import { showToast } from "../../../../helpers/toast";
import ClubsService from "../../../../services/clubsService";

const EditTableForm = (props) => {
  const nameInputRef = useRef();
  const maxPeopleInputRef = useRef();
  const areaInputRef = useRef();

  const handleSaveForm = async () => {
    await saveTable(props.table._id);
    props.handleEditModalClose();
  };

  const saveTable = async (tableId) => {
    const table = {
      _id: tableId,
      name: nameInputRef.current.value,
      maxPersons: maxPeopleInputRef.current.value,
      area: areaInputRef.current.value,
    };

    try {
      const response = await ClubsService.updateTable(tableId, table);

      // Handle the response as needed
      if (response) {
        // Handle success
        showToast("Table saved successfully", "success");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        showToast("Failed to save table", "error");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while saving the table:", error);
      showToast("Error: An error occurred while saving the table", "error");
    }
  };
  return (
    <>
      {props.isEditTableModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isEditTableModalOpen}
            onClose={props.handleTableModalClose}
            backdrop={props.isEditTableModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Edit Table
            </Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Enter name"
                    id="name"
                    type="text"
                    ref={nameInputRef}
                    defaultValue={props.table.name}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="phone">
                    Max People *
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Enter Table maxPeople"
                    id="phone"
                    type="text"
                    ref={maxPeopleInputRef}
                    defaultValue={props.table.maxPersons}
                  />
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="area">
                      Area
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Set area"
                      id="area"
                      type="text"
                      ref={areaInputRef}
                      defaultValue={props.table.area}
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleSaveForm} appearance="primary">
                Ok
              </Button>
              <Button onClick={props.handleEditModalClose} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default EditTableForm;
