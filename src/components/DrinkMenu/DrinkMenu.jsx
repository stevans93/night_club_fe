import { FaGlassMartiniAlt } from "react-icons/fa";
import "../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";

const DrinkMenu = (props) => {
  const fetchItems = async () => {
    await props.fetchProducts();
    props.showItems();
  };

  return (
    <>
      <div className="flex h-fit w-60 mt-10 bg-white items-center">
        <div className="flex h-44 w-full items-center justify-center bg-transparent  gap-2">
          <button
            onClick={fetchItems}
            className="flex flex-col items-center justify-center w-full h-full gap-4"
          >
            <FaGlassMartiniAlt className="h-10 w-10" />
            <span>Drink Menu</span>
          </button>
        </div>
      </div>

      {props.showDrinks && (
        <div style={{ textAlign: "center" }}>
          <Modal
            open={props.showDrinks}
            onClose={props.handleClose}
            backdrop={props.backdrop}
          >
            <Modal.Header>{props.modalProductType}</Modal.Header>
            <Modal.Body>
              <ul>
                {props.drinkCategories.map((category) => {
                  return (
                    <li key={category.id}>
                      {category.name}
                      <ul className="ml-4">
                        {props.products
                          .filter(
                            (x) => x.subCategory === category.name.toLowerCase()
                          )
                          .map((product) => {
                            return (
                              <li key={product._id}>
                                * {product.name} {product.price}
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="bg-[#3498ff]"
                onClick={props.handleClose}
                appearance="primary"
              >
                Ok
              </Button>
              <Button onClick={props.handleClose} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default DrinkMenu;
