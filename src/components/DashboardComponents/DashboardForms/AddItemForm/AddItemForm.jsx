import React, { useState, useRef } from "react";
import { Modal, Button } from "rsuite";
import ProductsService from "../../../../services/productsService";
import "../../../../../node_modules/rsuite/dist/rsuite.min.css";

const AddItemForm = (props) => {
  const [category, setCategory] = useState("drink");

  const subCategoryInputRef = useRef();
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const imageInputRef = useRef();

  const handleSaveForm = async () => {
    await saveItem();
    props.handleItemModalClose();
  };

  const saveItem = async () => {
    const item = {
      category: category,
      subCategory: subCategoryInputRef.current.value,
      name: nameInputRef.current.value,
      price: priceInputRef.current.value,
      image: imageInputRef.current.value,
    };

    try {
      const response = await ProductsService.addProduct(item);

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
        <option value="drink">Drink</option>
        <option value="food">Food</option>
      </>
    );
  };

  const renderSubCategoryOptions = () => {
    if (category === "drink") {
      return props.drinkCategories.map((category) => (
        <option key={category.name} value={category.name.toLowerCase()}>
          {category.name}
        </option>
      ));
    } else {
      return props.foodCategories.map((category) => (
        <option key={category.name} value={category.name.toLowerCase()}>
          {category.name}
        </option>
      ));
    }
  };

  return (
    <>
      {props.isAddItemModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isAddItemModalOpen}
            onClose={props.handleItemModalClose}
            backdrop={props.isAddItemModalOpen}
          >
            <Modal.Header className="border-b-2 text-2xl py-2">
              Add Item
            </Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="category">
                    Category
                  </label>
                  <select
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Choose Category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {renderCategoryOptions()}
                  </select>
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="subCategory">
                    Subcategory
                  </label>
                  <select
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Choose Subcategory"
                    id="subCategory"
                    ref={subCategoryInputRef}
                  >
                    {renderSubCategoryOptions()}
                  </select>
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Set Name"
                      id="name"
                      type="text"
                      ref={nameInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="price">
                      Price
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Set Price"
                      id="price"
                      type="text"
                      ref={priceInputRef}
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="image">
                      Image
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="image"
                      type="text"
                      placeholder="Choose Image"
                      ref={imageInputRef}
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-[#3498ff]" onClick={handleSaveForm} appearance="primary">
                Ok
              </Button>
              <Button onClick={props.handleItemModalClose} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default AddItemForm;
