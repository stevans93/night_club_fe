import { http } from "../http/api";

const clubsPath = "/club"; // Common part of the path for clubs

class ClubsService {
  static getAllClubs = (
    pageNumber,
    pageSize,
    name,
    location,
    bannerImage,
    date,
    type
  ) => {
    const queryParams = new URLSearchParams({
      pageNumber,
      pageSize,
      name,
      location,
      bannerImage,
      date,
      type,
    }).toString();

    return http.get(`${clubsPath}/all?${queryParams}`);
  };

  static getSingleClub = (clubId) =>
    http.get(`${clubsPath}/singleClub/${clubId}`);

  static addClub = (clubData) => http.post(`${clubsPath}/addClub`, clubData);

  static updateClub = (clubId, updatedClubData) =>
    http.put(`${clubsPath}/updateClub/${clubId}`, updatedClubData);

  static deleteClub = (clubId) =>
    http.delete(`${clubsPath}/deleteClub/${clubId}`);
}

export default ClubsService;
