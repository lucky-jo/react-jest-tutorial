import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";
import mockedAxios from "axios";

afterEach(cleanup);

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("AddInput", () => {
  it("fetch followersList", async () => {
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
    mockedAxios.get.mockResolvedValueOnce(list);
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it.skip("should render follower items", async () => {});
});
