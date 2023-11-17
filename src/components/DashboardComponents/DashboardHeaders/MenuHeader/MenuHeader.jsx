import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import AddCategoryForm from "../../DashboardForms/AddCategoryForm/AddCategoryForm";
import DeleteCategoryForm from "../../DashboardForms/DeleteCategoryForm/DeleteCategoryForm";

const MenuHeader = (props) => {
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);

  const handleCategoryModalOpen = () => {
    setIsAddCategoryModalOpen(true);
  };

  const handleCategoryModalClose = () => {
    setIsAddCategoryModalOpen(false);
  };

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
          <button className="flex items-center px-5 py-3 rounded-lg bg-red-700 h-8 text-white gap-2">
            <MdDelete size="1.3rem" />
            Obriši Kategoriju
          </button>
        </div>
      </div>
      <AddCategoryForm
        isAddCategoryModalOpen={isAddCategoryModalOpen}
        handleCategoryModalClose={handleCategoryModalClose}
      />
      <DeleteCategoryForm />
    </>
  );
};

export default MenuHeader;
