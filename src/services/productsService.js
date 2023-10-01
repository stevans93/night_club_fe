import { http } from "../http/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Utility function to display toasts
export const showToast = (message, type = "success") => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const productsPath = "/product";

class ProductsService {
  static async handleResponse(response) {
    if (!(response.status >= 200 && response.status < 300)) {
      console.error("Backend error:", response.statusText);
      showToast(
        "Error: An error occurred while processing your request",
        "error"
      );
      throw new Error("Request failed");
    }

    return response.data;
  }

  static async getAllProducts(clubId) {
    const response = await http.get(`${productsPath}/allProducts/${clubId}`);
    return this.handleResponse(response);
  }

  static async getSingleProduct(productId) {
    const response = await http.get(
      `${productsPath}/singleProduct/${productId}`
    );
    return this.handleResponse(response);
  }

  static async addProduct(productData) {
    const response = await http.post(`${productsPath}/addProduct`, productData);
    return this.handleResponse(response);
  }

  static async updateProduct(productId, productData) {
    const response = await http.put(
      `${productsPath}/updateProduct/${productId}`,
      productData
    );
    return this.handleResponse(response);
  }

  static async deleteProduct(productId) {
    const response = await http.delete(
      `${productsPath}/deleteProduct/${productId}`
    );
    return this.handleResponse(response);
  }
}

export default ProductsService;
