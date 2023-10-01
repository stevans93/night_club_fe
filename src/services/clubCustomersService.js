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

const clubCustomersPath = "/clubCustomers";

class ClubCustomersService {
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
