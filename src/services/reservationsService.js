import { http } from "../http/api";

const reservationsPath = "/reservations";

class ReservationsService {
  static getAllReservations = (name, date, table, pageNumber = 1, pageSize = 10, status) => {
    const queryParams = new URLSearchParams({
      name,
      date,
      table,
      pageNumber,
      pageSize,
      status,
    }).toString();

    return http.get(`${reservationsPath}/allReservations?${queryParams}`);
  };

  static getSingleReservation = (reservationId) => http.get(`${reservationsPath}/single/${reservationId}`);

  static addReservation = (reservationData) => http.post(`${reservationsPath}/add`, reservationData);

  static completeReservation = (reservationId) => http.put(`${reservationsPath}/complete/${reservationId}`);

  static updateReservation = (reservationId, reservationData) => http.put(`${reservationsPath}/update/${reservationId}`, reservationData);

  static deleteReservation = (reservationId) => http.delete(`${reservationsPath}/delete/${reservationId}`);
}

export default ReservationsService;
