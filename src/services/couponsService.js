import { http } from "../http/api";

const couponsPath = "/coupons"; // Common part of the path for coupons

class CouponsService {
  static getAllCoupons = (pageNumber = 1, pageSize = 10) => {
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

    return http.get(`${couponsPath}/allCoupons?${queryParams}`);
  };

  static getSingleCoupon = (couponId) =>
    http.get(`${couponsPath}/singleCoupon/${couponId}`);

  static addCoupon = (couponData) =>
    http.post(`${couponsPath}/addCoupon`, couponData);

  static updateCoupon = (couponId, couponData) =>
    http.put(`${couponsPath}/updateCoupon/${couponId}`, couponData);

  static deleteCoupon = (couponId) =>
    http.delete(`${couponsPath}/deleteCoupon/${couponId}`);
}

export default CouponsService;
