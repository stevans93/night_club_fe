import { http } from "../http/api";

const sitePath = "/site"; // Common part of the path

class SiteService {
  static async handleResponse(response) {
    if (!(response.status >= 200 && response.status < 300)) {
      console.error("Backend error:", response.statusText);
      throw new Error("Request failed");
    }
    return response.data;
  }

  static async getSingleSite() {
    const response = await http.get(`${sitePath}`);
    return this.handleResponse(response);
  }

  static async getSiteSliderImages() {
    const response = await http.get(`${sitePath}/allSiteSliderImages`);
    return this.handleResponse(response);
  }

  static async editSingleSite(siteData) {
    const response = await http.put(`${sitePath}`, siteData);
    console.log(response);
    return this.handleResponse(response);
  }
}

export default SiteService;
