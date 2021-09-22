import axios from "axios";

// export const BASE_URL = "https://jsonplaceholder.typicode.com";
export const BASE_URL = "https://randomuser.me";

export const followersList = async () => {
  try {
    return await axios.get(`${BASE_URL}/api/?results=5`);
  } catch (e) {
    return [];
  }
};
