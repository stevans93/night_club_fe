import { http } from "../http/api";

const productsPath = "/product";

class ProductsService {
  static getAllProducts = (clubId) => http.get(`${productsPath}/allProducts/${clubId}`);

  static getSingleProduct = (productId) => http.get(`${productsPath}/singleProduct/${productId}`);

  static addProduct = (productData) => http.post(`${productsPath}/addProduct`, productData);

  static updateProduct = (productId, productData) => http.put(`${productsPath}/updateProduct/${productId}`, productData);

  static deleteProduct = (productId) => http.delete(`${productsPath}/deleteProduct/${productId}`);
}

export default ProductsService;
