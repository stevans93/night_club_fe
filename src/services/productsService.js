import { http } from "../http/api";
import { showToast } from "../helpers/toast";

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

  static async getAllProducts(clubId, subCategory) {
    // Create an object with defined parameters
    const params = {
      subCategory,
    };

    // Filter out undefined parameters
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== undefined)
    );

    // Convert filteredParams to query string
    const queryParams = new URLSearchParams(filteredParams).toString();

    let path = `${productsPath}/allProducts/${clubId}`;

    if (queryParams) {
      path += `?${queryParams}`;
    }

    const response = await http.get(`${path}`);

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
