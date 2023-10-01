import React from "react";
import "../../../node_modules/rsuite/dist/rsuite.min.css";
import { Modal, Button } from "rsuite";
import { useState, useEffect } from "react";
import DrinksCarousel from "../DrinksCarousel/DrinksCarousel";
import { useParams } from "react-router-dom";
import ProductsService from "../../services/productsService";

export default function DrinkMenu() {
  const { clubId } = useParams();

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
      (product) => product.subCategory === drinkType.toLowerCase()
    );
    setModalProducts(drinkList);
    setModalProductType(drinkType);
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
  }, [clubId]);

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
                  return (
                    <li key={product.id}>
                      {product.name} {product.price}
                    </li>
                  );
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
