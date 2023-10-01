import { http } from "../http/api";

const clubCustomersPath = "/clubCustomers"; // Common part of the path for club customers

class ClubCustomersService {
  static getAllCustomers = (pageNumber, pageSize, name, email, mobilePhone) => {
    const queryParams = new URLSearchParams({
      pageNumber,
      pageSize,
      name,
      email,
      mobilePhone,
    }).toString();

    return http.get(`${clubCustomersPath}/allCustomers?${queryParams}`);
  };

  static getSingleCustomer = (customerId) => http.get(`${clubCustomersPath}/singleCustomer/${customerId}`);

  static addCustomer = (customerData) => http.post(`${clubCustomersPath}/addCustomer`, customerData);

  static updateCustomer = (customerId, customerData) =>
    http.put(`${clubCustomersPath}/updateCustomer/${customerId}`, customerData);

  static deleteCustomer = (customerId) => http.delete(`${clubCustomersPath}/deleteCustomer/${customerId}`);
}

export default ClubCustomersService;
