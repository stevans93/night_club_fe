import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import ClubsService from "../../../../services/clubsService";

const AddTableForm = (props) => {
  const nameInputRef = useRef();
  const maxPeopleInputRef = useRef();
  const areaInputRef = useRef();

  const handleSaveForm = async () => {
    await saveTable();
    props.handleTableModalClose();
    window.location.reload();
  };

  const saveTable = async () => {
    const table = {
      name: nameInputRef.current.value,
      maxPersons: maxPeopleInputRef.current.value,
      area: areaInputRef.current.value,
    };

    try {
      const response = await ClubsService.addTable(table);

      // Handle the response as needed
      if (response) {
        // Handle success
        console.log("Table saved successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to save table");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while saving the table:", error);
    }
  };
  return (
    <>
      {props.isAddTableModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isAddTableModalOpen}
            onClose={props.handleTableModalClose}
            backdrop={props.isAddTableModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Dodaj Sto
            </Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Ime
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Ime..."
                    id="name"
                    type="text"
                    ref={nameInputRef}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="phone">
                    Maksimalan Broj Ljudi *
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Maksimalan Broj Ljudi..."
                    id="phone"
                    type="text"
                    ref={maxPeopleInputRef}
                  />
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="area">
                      Mesto u Klubu
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Unesite Mesto u Klubu..."
                      id="area"
                      type="text"
                      ref={areaInputRef}
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="bg-[#3498ff]"
                onClick={handleSaveForm}
                appearance="primary"
              >
                Potvrdi
              </Button>
              <Button onClick={props.handleTableModalClose} appearance="subtle">
                Otkaži
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default AddTableForm;
