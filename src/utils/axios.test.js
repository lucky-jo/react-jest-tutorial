import axios from "axios";

import { BASE_URL, followersList } from "./axios";

jest.mock("axios");

describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const list = {
        data: {
          results: [
            {
              name: {
                first: "Laith",
                last: "Harb",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/39.jpg",
              },
              login: {
                username: "ThePhomGOAT",
              },
            },
          ],
        },
      };
      axios.get.mockResolvedValueOnce(list);

      // when
      const result = await followersList();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/api/?results=5`);
      expect(result).toEqual(list);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await followersList();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/api/?results=5`);
      expect(result).toEqual([]);
    });
  });
});
