import { http } from "../http/api";

const authPath = "/auth"; // Common part of the path

class AuthService {
  static registerUser = (userData) =>
    http.post(`${authPath}/register`, userData);

  static loginUser = (userData) => http.post(`${authPath}/login`, userData);
}

export default AuthService;
