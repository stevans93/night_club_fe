import { useState, useEffect } from "react";
import ProductsService from "../../../services/productsService";
import AddItemForm from "../DashboardForms/AddItemForm/AddItemForm";
import MenuDrinksComponent from "./MenuDrinksComponents";
import MenuFoodComponent from "./MenuFoodComponent";
import ClubsService from "../../../services/clubsService";
import EditItemForm from "../DashboardForms/EditItemForm/EditItemForm";
import MenuHeader from "../DashboardHeaders/MenuHeader/MenuHeader";

const DashboardMenuComponent = () => {
  const [isDrinkCategoriesOpen, setIsDrinkCategoriesOpen] = useState(true);
  const [isFoodCategoriesOpen, setIsFoodCategoriesOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showFood, setShowFood] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [modalProductType, setModalProductType] = useState("");
  const [products, setProducts] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  const [drinkCategories, setDrinkCategories] = useState(null);
  const [foodCategories, setFoodCategories] = useState(null);

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;

  const showDrinkCategories = () => {
    setIsDrinkCategoriesOpen(!isDrinkCategoriesOpen);
    setIsFoodCategoriesOpen(false);
  };

  const showFoodCategories = () => {
    setIsFoodCategoriesOpen(!isFoodCategoriesOpen);
    setIsDrinkCategoriesOpen(false);
  };

  const showItemModal = () => {
    setIsAddItemModalOpen(true);
  };

  const showEditItemModal = async (id) => {
    await fetchSingleProduct(id);
    setIsEditItemModalOpen(true);
  };

  const handleCloseDrinks = () => setShowDrinks(false);
  const handleCloseFood = () => setShowFood(false);
  const handleAddItemModalClose = () => setIsAddItemModalOpen(false);
  const handleEditItemModalClose = () => setIsEditItemModalOpen(false);

  const showDrinkItems = (value) => {
    setShowDrinks(true);
    setBackdrop(true);
    setModalProductType(value);
  };

  const showFoodItems = (value) => {
    setShowFood(true);
    setBackdrop(true);
    setModalProductType(value);
  };

  const handleDelete = async (id) => {
    await fetchDeleteItemById(id);
  };

  const fetchProducts = async (subCategory) => {
    try {
      const productsData = await ProductsService.getAllProducts(
        clubId,
        subCategory
      );
      setProducts(productsData); // Assuming productsData is the array of products you want to set
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while fetching products:", error);
    }
  };

  const fetchSingleProduct = async (id) => {
    try {
      const productData = await ProductsService.getSingleProduct(id);
      setProductToEdit(productData);
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchDrinkCategories = async () => {
      try {
        const categoryData = await ClubsService.getDrinkCategories(clubId);
        if (categoryData) {
          setDrinkCategories(categoryData);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching categories:", error);
      }
    };

    fetchDrinkCategories();
  }, []);

  useEffect(() => {
    const fetchFoodCategories = async () => {
      try {
        const categoryData = await ClubsService.getFoodCategories(clubId);
        if (categoryData) {
          setFoodCategories(categoryData);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching categories:", error);
      }
    };

    fetchFoodCategories();
  }, []);

  const fetchDeleteItemById = async (id) => {
    try {
      const response = await ProductsService.deleteProduct(id);

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

  return (
    <>
      <MenuHeader onClick={showItemModal} />
      <div className="flex py-10 gap-10 bg-[#F9F9F9] h-full">
        <div className="flex flex-col gap-4 items-center h-fit shadow-lg px-4 py-4 bg-white h-full">
          <button
            onClick={showDrinkCategories}
            autoFocus
            className="flex w-fit py-3 px-14 active:bg-primary active:text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-lg"
          >
            Pića
          </button>
          <button
            onClick={showFoodCategories}
            className="flex w-fit py-3 px-14 active:bg-primary active:text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-lg"
          >
            Hrana
          </button>
        </div>
        {isDrinkCategoriesOpen && (
          <MenuDrinksComponent
            showItems={showDrinkItems}
            show={showDrinks}
            backdrop={backdrop}
            modalProducts={products}
            modalProductType={modalProductType}
            handleClose={handleCloseDrinks}
            categories={drinkCategories}
            fetchProducts={fetchProducts}
            showEditItemModal={showEditItemModal}
            handleDelete={handleDelete}
          />
        )}
        {isFoodCategoriesOpen && (
          <MenuFoodComponent
            showItems={showFoodItems}
            show={showFood}
            backdrop={backdrop}
            modalProducts={products}
            modalProductType={modalProductType}
            handleClose={handleCloseFood}
            categories={foodCategories}
            fetchProducts={fetchProducts}
            showEditItemModal={showEditItemModal}
            handleDelete={handleDelete}
          />
        )}
      </div>
      {foodCategories && drinkCategories && (
        <AddItemForm
          isAddItemModalOpen={isAddItemModalOpen}
          handleItemModalClose={handleAddItemModalClose}
          foodCategories={foodCategories}
          drinkCategories={drinkCategories}
        />
      )}

      {productToEdit && (
        <EditItemForm
          isEditItemModalOpen={isEditItemModalOpen}
          handleEditItemModalClose={handleEditItemModalClose}
          product={productToEdit}
          foodCategories={foodCategories}
          drinkCategories={drinkCategories}
        />
      )}
    </>
  );
};

export default DashboardMenuComponent;
