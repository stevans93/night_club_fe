import "../../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import EditButton from "../../Buttons/EditButton/EditButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import AddFoodCategoryForm from "../DashboardForms/AddFoodCategoryForm/AddFoodCategoryForm";
import { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";

const MenuFoodComponent = (props) => {
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);

  const handleCategoryModalOpen = () => {
    setIsAddCategoryModalOpen(true);
  };

  const handleCategoryModalClose = () => {
    setIsAddCategoryModalOpen(false);
  };

  const fetchItems = async (value) => {
    await props.fetchProducts(value);
    props.showItems(value);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <ul className="flex gap-4 items-center">
          {props.categories &&
            props.categories.map((category) => {
              return (
                <li
                  key={category._id}
                  className="flex flex-col items-center gap-3 w-fit bg-white shadow-lg py-10 px-24 rounded-lg h-fit"
                  onClick={() => fetchItems(category.name)}
                >
                  <GiKnifeFork size='3rem' />
                  {category.name}
                </li>
              );
            })}
          <li
            onClick={handleCategoryModalOpen}
            className="flex w-fit py-3 px-14 bg-primary text-white rounded-lg h-fit"
          >
            + Dodaj Kategoriju
          </li>
        </ul>
      </div>
      {props.show && (
        <div style={{ margin: 50, textAlign: "center" }}>
          <Modal
            open={props.show}
            onClose={props.handleClose}
            backdrop={props.backdrop}
            size="md"
          >
            <Modal.Header>{props.modalProductType}</Modal.Header>
            <Modal.Body>
              {props.modalProducts && (
                <table className="w-full text-sm text-left text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b-2">
                    <th className="border-r-2 bg-white px-6 py-3">SI</th>
                    <th className="border-r-2 bg-white px-6 py-3">Ime</th>
                    <th className="border-r-2 bg-white px-6 py-3">Cena</th>
                    <th className="border-r-2 bg-white px-6 py-3">Opcije</th>
                  </thead>
                  <tbody className="divide-y">
                    {props.modalProducts.map((product, i) => {
                      return (
                        <tr
                          key={product._id}
                          className="bg-white  "
                        >
                          <td className="border-r-2 px-6 py-3">{i++ + 1}</td>
                          <td className="border-r-2 px-6 py-3">
                            {product.name}
                          </td>
                          <td className="border-r-2 px-6 py-3">
                            {product.price}
                          </td>
                          <td className="flex border-r-2 px-6 py-3 gap-2">
                            <EditButton
                              onClick={() =>
                                props.showEditItemModal(product._id)
                              }
                            />
                            <DeleteButton
                              onClick={() => props.handleDelete(product._id)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-[#3498ff]" onClick={props.handleClose} appearance="primary">
                Ok
              </Button>
              <Button onClick={props.handleClose} appearance="subtle">
                Otkaži
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      <AddFoodCategoryForm
        isAddCategoryModalOpen={isAddCategoryModalOpen}
        handleCategoryModalClose={handleCategoryModalClose}
      />
    </>
  );
};

export default MenuFoodComponent;
