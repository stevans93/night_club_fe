import { http } from "../http/api";
import { uploadHttp } from '../http/api';
const clubsPath = "/club";

class ClubsService {
  static async handleResponse(response) {
    if (!(response.status >= 200 && response.status < 300)) {
      console.error("Backend error:", response.statusText);
      throw new Error("Request failed");
    }
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

  static async addClub(clubAndUserData) {
    const response = await http.post(`${clubsPath}/addClub`, clubAndUserData);
    return this.handleResponse(response);
  }

  static async updateClub(clubId, updatedClubData) {
    const response = await uploadHttp.put(
      `${clubsPath}/updateClub/${clubId}`,
      updatedClubData
    );
    return this.handleResponse(response);
  }

  static async deleteClub(clubId) {
    const response = await http.delete(`${clubsPath}/deleteClub/${clubId}`);
    return this.handleResponse(response);
  }

  static async getAllTables(clubId, date, pageNumber, pageSize) {
    // Create an object with defined parameters
    const params = {
      pageNumber,
      pageSize,
      clubId,
      date,
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

      throw error;
    }
  }

  static async getSingleTable(tableId) {
    try {
      const response = await http.get(`${clubsPath}/tables/${tableId}`);
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching single table:", error);

      throw error;
    }
  }

  static async deleteTable(tableId) {
    try {
      const response = await http.delete(`${clubsPath}/table/${tableId}`);
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error deleting table:", error);

      throw error;
    }
  }

  static async addDrinkCategory(newCategory) {
    try {
      const response = await http.post(
        `${clubsPath}/drinkCategory/addCategory`,
        {
          newCategory,
        }
      );
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error adding category:", error);

      throw error;
    }
  }

  static async addFoodCategory(newCategory) {
    try {
      const response = await http.post(
        `${clubsPath}/foodCategory/addCategory`,
        {
          newCategory,
        }
      );
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error adding category:", error);

      throw error;
    }
  }

  static async getDrinkCategories(clubId) {
    try {
      const response = await http.get(`${clubsPath}/drinkCategories/${clubId}`);
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching categories:", error);

      throw error;
    }
  }

  static async getFoodCategories(clubId) {
    try {
      const response = await http.get(`${clubsPath}/foodCategories/${clubId}`);
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching categories:", error);

      throw error;
    }
  }

  static async getAllSliderImages(clubId) {
    try {
      const response = await http.get(`${clubsPath}/sliderImages/${clubId}`);
      return this.handleResponse(response);
    } catch (error) {
      console.error(error);
      throw new Error("Internal server error"); // Or handle the error as needed
    }
  }

  static async getAllDashboardSliderImages(clubId) {
    try {
      const response = await http.get(
        `${clubsPath}/dashboardSliderImages/${clubId}`
      );
      return this.handleResponse(response);
    } catch (error) {
      console.error(error);
      throw new Error("Internal server error"); // Or handle the error as needed
    }
  }

  static async getWorkingHours(clubId) {
    try {
      const response = await http.get(`${clubsPath}/workingHours/${clubId}`);
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching working hours:", error);
      throw error;
    }
  }

  static async getDashboardWorkingHours() {
    try {
      const response = await http.get(
        `${clubsPath}/dashboardWorkingHours`
      );
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching working hours:", error);
      throw error;
    }
  }

  static async updateWorkingHours(updatedWorkingHours) {
    try {
      const response = await http.put(`${clubsPath}/updateWorkingHours`, {
        workingHours: updatedWorkingHours,
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error updating working hours:", error);
      throw error;
    }
  }
}

export default ClubsService;
