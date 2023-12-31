import React, { useState, useRef } from "react";
import { Modal, Button } from "rsuite";
import ProductsService from "../../../../services/productsService";
import "../../../../../node_modules/rsuite/dist/rsuite.min.css";

const EditItemForm = (props) => {
  const [category, setCategory] = useState("drink");

  const subCategoryInputRef = useRef();
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const imageInputRef = useRef();

  const handleSaveForm = async () => {
    await saveItem(props.product._id);
    props.handleEditItemModalClose();
  };

  const saveItem = async (itemId) => {
    const item = {
      _id: itemId,
      category: category,
      subCategory: subCategoryInputRef.current.value,
      name: nameInputRef.current.value,
      price: priceInputRef.current.value,
      image: imageInputRef.current.value,
    };

    try {
      const response = await ProductsService.updateProduct(itemId, item);

      if (response) {
        console.log("Item saved successfully");
      } else {
        console.log("Failed to save item");
      }
    } catch (error) {
      console.error("An error occurred while saving the item:", error);
    }
  };

  const renderCategoryOptions = () => {
    return (
      <>
        <option value="Piće">Piće</option>
        <option value="Hrana">Hrana</option>
      </>
    );
  };

  const renderSubCategoryOptions = () => {
    if (category === "Piće") {
      return props.drinkCategories.map((category) => (
        <option
          defaultValue={props.product.category}
          key={category.name}
          value={category.name.toLowerCase()}
        >
          {category.name}
        </option>
      ));
    } else {
      return props.foodCategories.map((category) => (
        <option
          defaultValue={props.product.category}
          key={category.name}
          value={category.name.toLowerCase()}
        >
          {category.name}
        </option>
      ));
    }
  };

  return (
    <>
      {props.isEditItemModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isEditItemModalOpen}
            onClose={props.handleEditItemModalClose}
            backdrop={props.isEditItemModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Uredi Stavku
            </Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="category">
                    Kategorija
                  </label>
                  <select
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Choose Category"
                    id="category"
                    value={category}
                    defaultValue={props.product.category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {renderCategoryOptions()}
                  </select>
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="subCategory">
                    Podkategorija
                  </label>
                  <select
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Choose Subcategory"
                    id="subCategory"
                    ref={subCategoryInputRef}
                    defaultValue={props.product.subCategory}
                  >
                    {renderSubCategoryOptions()}
                  </select>
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="name">
                      Ime
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Set Name"
                      id="name"
                      type="text"
                      ref={nameInputRef}
                      defaultValue={props.product.name}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="price">
                      Cena
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Set Price"
                      id="price"
                      type="text"
                      ref={priceInputRef}
                      defaultValue={props.product.price}
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="image">
                      Slika
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="image"
                      type="text"
                      placeholder="Choose Image"
                      ref={imageInputRef}
                      defaultValue={props.product.image}
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
              <Button
                onClick={props.handleEditItemModalClose}
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

export default EditItemForm;
