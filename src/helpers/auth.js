// Function to get the token from localStorage
function getToken() {
    try {
      const token = localStorage.getItem("nc_token");
      if (token) {
        return token;
      } else {
        throw new Error("Token not found in localStorage");
      }
    } catch (error) {
      return null;
    }
  }
  
  // Export the getToken method
  export { getToken };
  