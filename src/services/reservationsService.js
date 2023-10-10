import { http } from "../http/api";

const reservationsPath = "/reservations";

class ReservationsService {
  static async handleResponse(response) {
    if (!(response.status >= 200 && response.status < 300)) {
      console.error("Backend error:", response.statusText);

      throw new Error("Request failed");
    }

    return response.data;
  }

  static async getAllReservations(
    name,
    date,
    table,
    pageNumber = 1,
    pageSize = 10,
    status
  ) {
    // Create an object with defined parameters
    const params = {
      name,
      date,
      table,
      pageNumber,
      pageSize,
      status,
    };

    // Filter out undefined parameters
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== undefined)
    );

    // Convert filteredParams to a query string
    const queryParams = new URLSearchParams(filteredParams).toString();

    const response = await http.get(
      `${reservationsPath}/allReservations?${queryParams}`
    );
    return this.handleResponse(response);
  }

  static async getSingleReservation(reservationId) {
    const response = await http.get(
      `${reservationsPath}/single/${reservationId}`
    );
    return this.handleResponse(response);
  }

  static async addReservation(reservationData) {
    const response = await http.post(
      `${reservationsPath}/add`,
      reservationData
    );
    return this.handleResponse(response);
  }

  static async completeReservation(reservationId) {
    const response = await http.put(
      `${reservationsPath}/complete/${reservationId}`
    );
    return this.handleResponse(response);
  }

  static async updateReservation(reservationId, reservationData) {
    const response = await http.put(
      `${reservationsPath}/update/${reservationId}`,
      reservationData
    );
    return this.handleResponse(response);
  }

  static async deleteReservation(reservationId) {
    const response = await http.delete(
      `${reservationsPath}/delete/${reservationId}`
    );
    return this.handleResponse(response);
  }
}

export default ReservationsService;
