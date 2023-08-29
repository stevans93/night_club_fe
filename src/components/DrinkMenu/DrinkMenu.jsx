import React from "react";
import "../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useState, useEffect } from "react";
import DrinksCarousel from "../DrinksCarousel/DrinksCarousel";

export default function DrinkMenu(props) {
  const [open, setOpen] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const handleOpen = (value) => {
    selectCategory(value);
    setOpen(true);
    setBackdrop(true);
  };
  const handleClose = () => setOpen(false);

  const [products, setProducts] = useState(null);
  const [modalProducts, setModalProducts] = useState(null);
  const [modalProductType, setModalProductType] = useState("");

  const selectCategory = (drinkType) => {
    const drinkList = products.filter(
      (product) => product.productCategory === drinkType.toLowerCase()
    );
    setModalProducts(drinkList);
    setModalProductType(drinkType);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:4000/api/product/allProducts/${props.clubId}`
      );
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <DrinksCarousel
        onClick={(value) => {
          handleOpen(value);
        }}
      />
      {open && (
        <div style={{ margin: 50, textAlign: "center" }}>
          <Modal open={open} onClose={handleClose} backdrop={backdrop}>
            <Modal.Header>{modalProductType}</Modal.Header>
            <Modal.Body>
              <ul>
                {modalProducts.map((product) => {
                  return <li key={product.id}>{product.name} {product.price}</li>;
                })}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} appearance="primary">
                Ok
              </Button>
              <Button onClick={handleClose} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
}
