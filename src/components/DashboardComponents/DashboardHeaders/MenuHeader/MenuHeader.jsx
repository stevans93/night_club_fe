import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import AddCategoryForm from "../../DashboardForms/AddCategoryForm/AddCategoryForm";
import DeleteCategoryForm from "../../DashboardForms/DeleteCategoryForm/DeleteCategoryForm";
import ClubsService from "../../../../services/clubsService";

const MenuHeader = (props) => {
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] =
    useState(false);

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;

  const [categories, setCategories] = useState();
  const [categoryName, setCategoryName] = useState("drinks");

  const handleCategorySelect = (data) => {
    console.log('here', data);
    setCategoryName(data);
  };

  const handleCategoryModalOpen = () => {
    setIsAddCategoryModalOpen(true);
  };

  const handleCategoryModalClose = () => {
    setIsAddCategoryModalOpen(false);
  };

  const handleDeleteModalOpen = () => {
    setIsDeleteCategoryModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteCategoryModalOpen(false);
  };

  useEffect(() => {
    const fetchDrinkCategories = async () => {
      let categoryData;
      try {
        if (categoryName === "drinks") {
          categoryData = await ClubsService.getDrinkCategories(clubId);
        } else if (categoryName === "food") {
          categoryData = await ClubsService.getFoodCategories(clubId);
        }
        if (categoryData) {
          setCategories(categoryData);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching categories:", error);
      }
    };

    fetchDrinkCategories();
  }, [categoryName]);

  return (
    <>
      <div className="flex rounded-lg items-center h-16 justify-between px-5 bg-white shadow-lg">
        <div className="flex items-center gap-3">
          <span>Meni</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCategoryModalOpen}
            className="flex items-center px-5 py-3 rounded-lg bg-primary h-8 text-white gap-2"
          >
            <AiOutlinePlus size="1.3rem" />
            Dodaj Kategoriju
          </button>
          <button
            onClick={props.onClick}
            className="flex items-center px-5 py-3 rounded-lg bg-primary h-8 text-white gap-2"
          >
            <AiOutlinePlus size="1.3rem" />
            Dodaj Stavku
          </button>
          <button
            onClick={handleDeleteModalOpen}
            className="flex items-center px-5 py-3 rounded-lg bg-red-700 h-8 text-white gap-2"
          >
            <MdDelete size="1.3rem" />
            Obriši Kategoriju
          </button>
        </div>
      </div>
      <AddCategoryForm
        isAddCategoryModalOpen={isAddCategoryModalOpen}
        handleCategoryModalClose={handleCategoryModalClose}
      />
      {categories && (
        <DeleteCategoryForm
          isDeleteCategoryModalOpen={isDeleteCategoryModalOpen}
          handleDeleteModalClose={handleDeleteModalClose}
          handleCategorySelect={handleCategorySelect}
          categories={categories}
        />
      )}
    </>
  );
};

export default MenuHeader;
