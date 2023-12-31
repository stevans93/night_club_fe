import { useEffect, useState } from "react";

import ClubInputForm from "../../components/ClubInputForm/ClubInputForm";
import ClubsService from "../../services/clubsService";
import DrinkMenu from "../../components/DrinkMenu/DrinkMenu";
import EventList from "../../components/EventList/EventList";
import FoodMenu from "../../components/FoodMenu/FoodMenu";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ProductsService from "../../services/productsService";
import { useParams } from "react-router-dom";

const Club = () => {
  const { clubId } = useParams();
  const [selectedParams, setSelectedParams] = useState({});
  const [products, setProducts] = useState(null);
  const [modalProductType, setModalProductType] = useState("");
  const [drinkCategories, setDrinkCategories] = useState(null);
  const [foodCategories, setFoodCategories] = useState(null);
  const [sliderImages, setSliderImages] = useState(null);
  const [backdrop, setBackdrop] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showFood, setShowFood] = useState(false);

  const handleClose = () => setShowDrinks(false);
  const handleCloseFood = () => setShowFood(false);

  const handleChangIme = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      name: value,
    }));
  };

  const handleChangTip = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      type: value,
    }));
  };

  const handleChangeDate = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      date: value,
    }));
  };

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

  useEffect(() => {
    fetchProducts();
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
      }
    };

    fetchFoodCategories();
  }, []);

  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        const sliderImages = await ClubsService.getAllSliderImages(clubId);
        if (sliderImages) {
          setSliderImages(sliderImages);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching categories:", error);
      }
    };

    fetchSliderImages();
  }, []);

  console.log(sliderImages)

  return (
    <>
      <div className="flex flex-col bg-[#F0F4F9]">
        <div className="relative xl:h-h800 lg:h-h700 md:h-h550 sm:h-h500 xs:h-h500">
          {sliderImages && (
            <ImageCarousel images={sliderImages.clubSliderImages} />
          )}
        </div>
        <div className="flex w-full flex-col items-center bg-[#F0F4F9] mt-16 mb-16">
          <h2 className="text-3xl">
            <span className="font-bold text-3xl underline decoration-primary">
              Karta Pića i Hrane
            </span>
          </h2>
          <div className="flex w-full justify-center gap-4 xs:flex-col sm:flex-row xs:items-center">
            {products && drinkCategories && drinkCategories.length !== 0 && (
              <DrinkMenu
                modalProductType={modalProductType}
                drinkCategories={drinkCategories}
                fetchProducts={fetchProducts}
                showItems={showDrinkItems}
                handleClose={handleClose}
                backdrop={backdrop}
                showDrinks={showDrinks}
                products={products}
              />
            )}
            {products && foodCategories && foodCategories.length !== 0 && (
              <FoodMenu
                modalProductType={modalProductType}
                foodCategories={foodCategories}
                fetchProducts={fetchProducts}
                showItems={showFoodItems}
                handleClose={handleCloseFood}
                backdrop={backdrop}
                showFood={showFood}
                products={products}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col xs:w-full max-w-screen-xl md:px-20 xs:px-5 pb-10">
          <span className="text-primary font-bold mt-6 mb-4">
            Izaberi Događaj
          </span>
          <h3 className="mb-10 text-5xl font-bold">Događaj</h3>
          <ClubInputForm
            handleChangIme={handleChangIme}
            handleChangTip={handleChangTip}
            handleChangeDate={handleChangeDate}
          />
          <EventList button="Rezerviši" params={selectedParams} />
        </div>
      </div>
    </>
  );
};

export default Club;
