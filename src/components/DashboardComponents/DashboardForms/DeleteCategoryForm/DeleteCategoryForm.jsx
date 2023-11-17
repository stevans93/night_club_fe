import "../../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useRef, useState } from "react";
import ClubsService from "../../../../services/clubsService";

const DeleteCategoryForm = (props) => {
  const categoryInputRef = useRef();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleSaveForm = async () => {
    await deleteCategory();
    props.handleDeleteModalClose();
    window.location.reload();
  };

  const deleteCategory = async () => {
    console.log(selectedCategoryId);

    try {
      const response = await ClubsService.deleteCategory(selectedCategoryId);
      // Handle the response as needed
      if (response) {
        // Handle success
        console.log("category saved successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to save category", error);
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while saving the category:", error);
    }
  };

  return (
    <>
      {props.isDeleteCategoryModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isDeleteCategoryModalOpen}
            onClose={props.handleDeleteModalClose}
            backdrop={props.isDeleteCategoryModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Obriši podkategoriju
            </Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap gap-4">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="category">
                    Izaberi kategoriju
                  </label>
                  <select
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    name="category"
                    id="category"
                    ref={categoryInputRef}
                    defaultValue="drinks"
                    onChange={(e) => {
                      props.handleCategorySelect(e.currentTarget.value);
                    }}
                  >
                    <option value="drinks">Pića</option>
                    <option value="food">Hrana</option>
                  </select>
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Ime
                  </label>
                  <select
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    name="name"
                    id="name"
                    onChange={(e) => {
                      setSelectedCategoryId(e.currentTarget.value);
                    }}
                  >
                    {props.categories.map((category) => {
                      return (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
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
              <Button
                onClick={props.handleDeleteModalClose}
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

export default DeleteCategoryForm;
