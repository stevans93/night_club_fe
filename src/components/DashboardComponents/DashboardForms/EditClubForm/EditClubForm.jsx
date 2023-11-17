import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import ClubsService from "../../../../services/clubsService";

const EditClubForm = (props) => {
  const nameInputRef = useRef();
  const typeInputRef = useRef();

  const handleSaveForm = async () => {
    await saveClub(props.club._id);
    props.handleEditModalClose();
  };

  const saveClub = async (clubId) => {
    const club = {
      _id: clubId,
      name: nameInputRef.current.value,
      type: typeInputRef.current.value,
    };

    try {
      const response = await ClubsService.updateClub(clubId, club);

      // Handle the response as needed
      if (response) {
        // Handle success
        console.log("club updated successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to update club");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while updating the club:", error);
    }
  };
  return (
    <>
      {props.isEditClubModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isEditClubModalOpen}
            onClose={props.handleEditModalClose}
            backdrop={props.isEditClubModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Uredi Klub
            </Modal.Header>
            <Modal.Body>
              <div className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="ime">
                    Ime Kluba
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Ime Kluba"
                    id="ime"
                    type="text"
                    defaultValue={props.club.name}
                    ref={nameInputRef}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="tip">
                    Tip Kluba
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite tip kluba"
                    id="tip"
                    type="text"
                    defaultValue={props.club.type}
                    ref={typeInputRef}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="bg-[#3498ff]"
                onClick={handleSaveForm}
                appearance="primary"
              >
                Potvrdi
              </Button>
              <Button onClick={props.handleEditModalClose} appearance="subtle">
                Otkaži
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default EditClubForm;
