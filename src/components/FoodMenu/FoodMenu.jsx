import { GiKnifeFork } from "react-icons/gi";
import "../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";

const FoodMenu = (props) => {
  const fetchItems = async () => {
    await props.fetchProducts();
    props.showItems();
  };

  return (
    <>
      <div className="flex h-fit w-60 sm:mt-10 xs:mt-0 bg-white items-center">
        <div className="flex h-44 w-full items-center justify-center bg-transparent  gap-2">
          <button
            onClick={fetchItems}
            className="flex flex-col items-center justify-center w-full h-full gap-4"
          >
            <GiKnifeFork className="h-10 w-10" />
            <span>Food Menu</span>
          </button>
        </div>
      </div>

      {props.showFood && (
        <div style={{ textAlign: "center" }}>
          <Modal
            open={props.showFood}
            onClose={props.handleClose}
            backdrop={props.backdrop}
          >
            <Modal.Header>{props.modalProductType}</Modal.Header>
            <Modal.Body>
              <ul>
                {props.foodCategories.map((category) => {
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
          </Modal>
        </div>
      )}
    </>
  );
};

export default FoodMenu;
