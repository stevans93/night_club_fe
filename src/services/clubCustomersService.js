import { http } from "../http/api";

const clubCustomersPath = "/clubCustomers";

class ClubCustomersService {
  static async handleResponse(response) {
    if (!(response.status >= 200 && response.status < 300)) {
      console.error("Backend error:", response.statusText);

      throw new Error("Request failed");
    }

    return response.data;
  }

  static async getAllCustomers(
    pageNumber,
    pageSize,
    name,
    email,
    mobilePhone
  ) {
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

    const response = await http.get(`${clubCustomersPath}/allCustomers?${queryParams}`);
    return this.handleResponse(response);
  }

  static async getSingleCustomer(customerId) {
    const response = await http.get(`${clubCustomersPath}/singleCustomer/${customerId}`);
    return this.handleResponse(response);
  }

  static async addCustomer(customerData) {
    const response = await http.post(`${clubCustomersPath}/addCustomer`, customerData);
    return this.handleResponse(response);
  }

  static async updateCustomer(customerId, customerData) {
    const response = await http.put(`${clubCustomersPath}/updateCustomer/${customerId}`, customerData);
    return this.handleResponse(response);
  }

  static async deleteCustomer(customerId) {
    const response = await http.delete(`${clubCustomersPath}/deleteCustomer/${customerId}`);
    return this.handleResponse(response);
  }
}

export default ClubCustomersService;
