import { http } from "../http/api";


const couponsPath = "/coupons"; // Common part of the path for coupons

class CouponsService {
  static async handleResponse(response) {
    if (!(response.status >= 200 && response.status < 300)) {
      console.error("Backend error:", response.statusText);
      
      throw new Error("Request failed");
    }

    return response.data;
  }

  static async getAllCoupons(pageNumber = 1, pageSize = 10) {
    // Create an object with defined parameters
    const params = {
      pageNumber,
      pageSize,
    };

    // Filter out undefined parameters
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== undefined)
    );

    // Convert filteredParams to query string
    const queryParams = new URLSearchParams(filteredParams).toString();

    const response = await http.get(`${couponsPath}/allCoupons?${queryParams}`);
    return this.handleResponse(response);
  }

  static async getSingleCoupon(couponId) {
    const response = await http.get(`${couponsPath}/singleCoupon/${couponId}`);
    return this.handleResponse(response);
  }

  static async addCoupon(couponData) {
    const response = await http.post(`${couponsPath}/addCoupon`, couponData);
    return this.handleResponse(response);
  }

  static async updateCoupon(couponId, couponData) {
    const response = await http.put(
      `${couponsPath}/updateCoupon/${couponId}`,
      couponData
    );
    return this.handleResponse(response);
  }

  static async deleteCoupon(couponId) {
    const response = await http.delete(
      `${couponsPath}/deleteCoupon/${couponId}`
    );
    return this.handleResponse(response);
  }
}

export default CouponsService;
