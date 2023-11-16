import { http, uploadHttp } from "../http/api";

const eventsPath = "/event";

class EventsService {
  static async handleResponse(response) {
    if (!(response.status >= 200 && response.status < 300)) {
      console.error("Backend error:", response.statusText);

      throw new Error("Request failed");
    }

    return response.data;
  }

  static async getAllEvents(
    pageNumber,
    pageSize,
    clubId,
    date,
    title,
    location,
    type
  ) {
    // Create an object with defined parameters
    const params = {
      pageNumber,
      pageSize,
      clubId,
      date,
      title,
      location,
      type,
    };

    // Filter out undefined parameters
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== undefined)
    );

    // Convert filteredParams to query string
    const queryParams = new URLSearchParams(filteredParams).toString();

    const response = await http.get(`${eventsPath}/allEvents?${queryParams}`);
    return this.handleResponse(response);
  }

  static async getSingleEvent(eventId) {
    const response = await http.get(`${eventsPath}/singleEvent/${eventId}`);
    return this.handleResponse(response);
  }

  static async addEvent(eventData) {
    const response = await uploadHttp.post(`${eventsPath}/addEvent`, eventData);
    return this.handleResponse(response);
  }

  static async updateEvent(eventId, eventData) {
    const response = await http.put(
      `${eventsPath}/updateEvent/${eventId}`,
      eventData
    );
    return this.handleResponse(response);
  }

  static async deleteEvent(eventId) {
    const response = await http.delete(`${eventsPath}/deleteEvent/${eventId}`);
    return this.handleResponse(response);
  }
}

export default EventsService;