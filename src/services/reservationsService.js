import { http } from "../http/api";

const reservationsPath = "/reservations";

class ReservationsService {
  static getAllReservations = (
    name,
    date,
    table,
    pageNumber = 1,
    pageSize = 10,
    status
  ) => {
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

    // Convert filteredParams to query string
    const queryParams = new URLSearchParams(filteredParams).toString();

    return http.get(`${reservationsPath}/allReservations?${queryParams}`);
  };

  static getSingleReservation = (reservationId) =>
    http.get(`${reservationsPath}/single/${reservationId}`);

  static addReservation = (reservationData) =>
    http.post(`${reservationsPath}/add`, reservationData);

  static completeReservation = (reservationId) =>
    http.put(`${reservationsPath}/complete/${reservationId}`);

  static updateReservation = (reservationId, reservationData) =>
    http.put(`${reservationsPath}/update/${reservationId}`, reservationData);

  static deleteReservation = (reservationId) =>
    http.delete(`${reservationsPath}/delete/${reservationId}`);
}

export default ReservationsService;
