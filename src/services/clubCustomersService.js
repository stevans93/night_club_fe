import { http } from "../http/api";

const clubCustomersPath = "/clubCustomers"; // Common part of the path for club customers

class ClubCustomersService {
  static getAllCustomers = (pageNumber, pageSize, name, email, mobilePhone) => {
    // Create an object with defined parameters
    const params = {
      pageNumber,
      pageSize,
      name,
      email,
      mobilePhone,
    };

    // Filter out undefined parameters
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== undefined)
    );

    // Convert filteredParams to query string
    const queryParams = new URLSearchParams(filteredParams).toString();

    return http.get(`${clubCustomersPath}/allCustomers?${queryParams}`);
  };

  static getSingleCustomer = (customerId) =>
    http.get(`${clubCustomersPath}/singleCustomer/${customerId}`);

  static addCustomer = (customerData) =>
    http.post(`${clubCustomersPath}/addCustomer`, customerData);

  static updateCustomer = (customerId, customerData) =>
    http.put(`${clubCustomersPath}/updateCustomer/${customerId}`, customerData);

  static deleteCustomer = (customerId) =>
    http.delete(`${clubCustomersPath}/deleteCustomer/${customerId}`);
}

export default ClubCustomersService;
