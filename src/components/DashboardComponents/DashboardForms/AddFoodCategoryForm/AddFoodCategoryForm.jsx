import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef } from "react";
import ClubsService from "../../../../services/clubsService";

const AddDrinkCategoryForm = (props) => {
  const nameInputRef = useRef();

  const handleSaveForm = async () => {
    await saveCategory();
    props.handleCategoryModalClose();
  };

  const saveCategory = async () => {
    const category = {
      name: nameInputRef.current.value,
    };

    try {
      const response = await ClubsService.addFoodCategory(category);

      // Handle the response as needed
      if (response) {
        // Handle success
        console.log("category saved successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to save category");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while saving the category:", error);
    }
  };
  return (
    <>
      {props.isAddCategoryModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isAddCategoryModalOpen}
            onClose={props.handleCategoryModalClose}
            backdrop={props.isAddCategoryModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Dodaj Kategoriju
            </Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Ime
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesi Ime..."
                    id="name"
                    type="text"
                    ref={nameInputRef}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-[#3498ff]" onClick={handleSaveForm} appearance="primary">
                Ok
              </Button>
              <Button
                onClick={props.handleCategoryModalClose}
                appearance="subtle"
              >
                Otkaži
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default AddDrinkCategoryForm;
