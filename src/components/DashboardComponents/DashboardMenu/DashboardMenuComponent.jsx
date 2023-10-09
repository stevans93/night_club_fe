import { useState, useEffect } from "react";
import ProductsService from "../../../services/productsService";
import MenuDrinksComponent from "./MenuDrinksComponents";
import MenuFoodComponent from "./MenuFoodComponent";

const DashboardMenuComponent = () => {
  const [isDrinkCategoriesOpen, setIsDrinkCategoriesOpen] = useState(false);
  const [isFoodCategoriesOpen, setIsFoodCategoriesOpen] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showFood, setShowFood] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [modalProductType, setModalProductType] = useState("");
  const [products, setProducts] = useState(null);
  const [modalProducts, setModalProducts] = useState(null);

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

  const handleCloseDrinks = () => setShowDrinks(false);
  const handleCloseFood = () => setShowFood(false);

  const showDrinkItems = (value) => {
    setShowDrinks(true);
    setBackdrop(true);
    selectDrinkCategory(value);
  };

  const showFoodItems = (value) => {
    setShowFood(true);
    setBackdrop(true);
    selectFoodCategory(value);
  };

  const selectDrinkCategory = (drinkType) => {
    const drinkList = products.filter(
      (product) => product.subCategory === drinkType.toLowerCase()
    );
    setModalProducts(drinkList);
    setModalProductType(drinkType);
  };

  const selectFoodCategory = (foodType) => {
    const foodList = products.filter(
      (product) => product.subCategory === foodType.toLowerCase()
    );
    setModalProducts(foodList);
    setModalProductType(foodType);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await ProductsService.getAllProducts(clubId);
        setProducts(productsData); // Assuming productsData is the array of products you want to set
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching products:", error);
      }
    };

    fetchProducts();
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
            modalProducts={modalProducts}
            modalProductType={modalProductType}
            handleClose={handleCloseDrinks}
          />
        )}
        {isFoodCategoriesOpen && (
          <MenuFoodComponent
            showItems={showFoodItems}
            show={showFood}
            backdrop={backdrop}
            modalProducts={modalProducts}
            modalProductType={modalProductType}
            handleClose={handleCloseFood}
          />
        )}
        <button className="flex w-fit py-3 px-14 bg-primary text-white rounded-lg h-fit">
          Add Item
        </button>
      </div>
    </>
  );
};

export default DashboardMenuComponent;
