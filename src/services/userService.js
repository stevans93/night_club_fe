import { http } from "../http/api";
import { showToast } from "../helpers/toast";

const usersPath = "/user"; // Adjust the API path accordingly

class UsersService {
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

  static async getAllUsers(pageNumber = 1, pageSize = 10, role) {
    // Create an object with defined parameters
    const params = {
      pageNumber,
      pageSize,
      role,
    };

    // Filter out undefined parameters
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== undefined)
    );

    // Convert filteredParams to a query string
    const queryParams = new URLSearchParams(filteredParams).toString();

    const response = await http.get(`${usersPath}/all?${queryParams}`);
    return this.handleResponse(response);
  }

  static async getSingleUser(userId) {
    const response = await http.get(`${usersPath}/single/${userId}`);
    return this.handleResponse(response);
  }

  static async addUser(userData) {
    const response = await http.post(`${usersPath}/addUser`, userData);
    return this.handleResponse(response);
  }

  static async updateUser(userId, userData) {
    const response = await http.put(`${usersPath}/update/${userId}`, userData);
    return this.handleResponse(response);
  }

  static async deleteUser(userId) {
    const response = await http.delete(`${usersPath}/delete/${userId}`);
    return this.handleResponse(response);
  }
}

export default UsersService;
