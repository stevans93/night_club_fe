import { http } from "../http/api";

const eventsPath = "/event"; // Common part of the path for events

class EventsService {
  static getAllEvents = (
    pageNumber,
    pageSize,
    clubId,
    date,
    name,
    location,
    type
  ) => {
    const queryParams = new URLSearchParams({
      pageNumber,
      pageSize,
      clubId,
      date,
      name,
      location,
      type,
    }).toString();

    return http.get(`${eventsPath}/allEvents?${queryParams}`);
  };

  static getSingleEvent = (eventId) =>
    http.get(`${eventsPath}/singleEvent/${eventId}`);

  static addEvent = (eventData) =>
    http.post(`${eventsPath}/addEvent`, eventData);

  static updateEvent = (eventId, eventData) =>
    http.put(`${eventsPath}/updateEvent/${eventId}`, eventData);

  static deleteEvent = (eventId) =>
    http.delete(`${eventsPath}/deleteEvent/${eventId}`);
}

export default EventsService;
