import { useState, useEffect } from "react";
import ProductsService from "../../../services/productsService";
import AddItemForm from "../DashboardForms/AddItemForm/AddItemForm";
import MenuDrinksComponent from "./MenuDrinksComponents";
import MenuFoodComponent from "./MenuFoodComponent";
import ClubsService from "../../../services/clubsService";
import EditItemForm from "../DashboardForms/EditItemForm/EditItemForm";

const DashboardMenuComponent = () => {
  const [isDrinkCategoriesOpen, setIsDrinkCategoriesOpen] = useState(false);
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

  return (
    <>
      <div className="flex justify-around">
        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={showDrinkCategories}
            className="flex w-fit py-3 px-14 bg-primary text-white rounded-lg"
          >
            Drinks
          </button>
          <button
            onClick={showFoodCategories}
            className="flex w-fit py-3 px-14 bg-primary text-white rounded-lg"
          >
            Food
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
          />
        )}
        <button
          onClick={showItemModal}
          className="flex w-fit py-3 px-14 bg-primary text-white rounded-lg h-fit"
        >
          Add Item
        </button>
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
