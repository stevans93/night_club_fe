import React from "react";
import "../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import DrinksCarousel from "../DrinksCarousel/DrinksCarousel";

export default function DrinkMenu(props) {
  return (
    <>
      <DrinksCarousel
        drinkCategories={props.drinkCategories}
        fetchProducts={props.fetchProducts}
        showItems={props.showItems}
      />
      {props.showDrinks && (
        <div style={{ margin: 50, textAlign: "center" }}>
          <Modal
            open={props.showDrinks}
            onClose={props.handleClose}
            backdrop={props.backdrop}
          >
            <Modal.Header>{props.modalProductType}</Modal.Header>
            <Modal.Body>
              <ul>
                {props.products.map((product) => {
                  return (
                    <li key={product.id}>
                      {product.name} {product.price}
                    </li>
                  );
                })}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-[#3498ff]" onClick={props.handleClose} appearance="primary">
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
}
