import { http } from "../http/api";
import { showToast } from "../helpers/toast";
const clubsPath = "/club";

class ClubsService {
  static async handleResponse(response) {
    if (!(response.status >= 200 && response.status < 300)) {
      console.error("Backend error:", response.statusText);
      showToast(
        "Error: An error occurred while processing your request",
        "error"
      );
      throw new Error("Request failed");
    }
    showToast("Success");
    return response.data;
  }

  static async getAllClubs(
    pageNumber,
    pageSize,
    name,
    location,
    bannerImage,
    date,
    type
  ) {
    // Create an object with defined parameters
    const params = {
      pageNumber,
      pageSize,
      name,
      location,
      bannerImage,
      date,
      type,
    };

    // Filter out undefined parameters
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== undefined)
    );

    // Convert filteredParams to query string
    const queryParams = new URLSearchParams(filteredParams).toString();

    const response = await http.get(`${clubsPath}/all?${queryParams}`);
    return this.handleResponse(response);
  }

  static async getSingleClub(clubId) {
    const response = await http.get(`${clubsPath}/singleClub/${clubId}`);
    return this.handleResponse(response);
  }

  static async addClub(clubData) {
    const response = await http.post(`${clubsPath}/addClub`, clubData);
    return this.handleResponse(response);
  }

  static async updateClub(clubId, updatedClubData) {
    const response = await http.put(
      `${clubsPath}/updateClub/${clubId}`,
      updatedClubData
    );
    return this.handleResponse(response);
  }

  static async deleteClub(clubId) {
    const response = await http.delete(`${clubsPath}/deleteClub/${clubId}`);
    return this.handleResponse(response);
  }

  static async getAllTables(pageNumber, pageSize) {
    // Create an object with defined parameters
    const params = {
      pageNumber,
      pageSize,
    };
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== undefined)
    );

    // Convert filteredParams to query string
    const queryParams = new URLSearchParams(filteredParams).toString();

    const response = await http.get(`${clubsPath}/tables?${queryParams}`);
    return this.handleResponse(response);
  }

  static async addTable(tableData) {
    try {
      const response = await http.post(`${clubsPath}/addTable`, tableData);
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error adding table:", error);
      showToast("Error: An error occurred while adding the table", "error");
      throw error;
    }
  }

  static async updateTable(tableId, updatedTableData) {
    try {
      const response = await http.put(
        `${clubsPath}/table/${tableId}`,
        updatedTableData
      );
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error updating table:", error);
      showToast("Error: An error occurred while updating the table", "error");
      throw error;
    }
  }

  static async getSingleTable(tableId) {
    try {
      const response = await http.get(`${clubsPath}/tables/${tableId}`);
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching single table:", error);
      showToast(
        "Error: An error occurred while fetching the single table",
        "error"
      );
      throw error;
    }
  }

  static async deleteTable(tableId) {
    try {
      const response = await http.delete(`${clubsPath}/table/${tableId}`);
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error deleting table:", error);
      showToast("Error: An error occurred while deleting the table", "error");
      throw error;
    }
  }

  static async addDrinkCategory(newCategory) {
    try {
      const response = await http.post(`${clubsPath}/drinkCategory/addCategory`, {
        newCategory,
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error adding category:", error);
      showToast("Error: An error occurred while adding the category", "error");
      throw error;
    }
  }

  static async addFoodCategory(newCategory) {
    try {
      const response = await http.post(`${clubsPath}/foodCategory/addCategory`, {
        newCategory,
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error adding category:", error);
      showToast("Error: An error occurred while adding the category", "error");
      throw error;
    }
  }

  static async getDrinkCategories(clubId) {
    try {
      const response = await http.get(`${clubsPath}/drinkCategories/${clubId}`);
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
      showToast("Error: An error occurred while fetching the categories", "error");
      throw error;
    }
  }

  static async getFoodCategories(clubId) {
    try {
      const response = await http.get(`${clubsPath}/foodCategories/${clubId}`);
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
      showToast("Error: An error occurred while fetching the categories", "error");
      throw error;
    }
  }
}

export default ClubsService;
