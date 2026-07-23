import axios from "axios";
import GitClient from "./GitClient";
jest.mock("axios");
describe("Git Client Tests", () => {
  test("should return repository names for techiesyed", async () => {
    const repos = [
      { id: 1, name: "Repo1" },
      { id: 2, name: "Repo2" },
    ];
    axios.get.mockResolvedValue({ data: repos });
    const result = await GitClient.getRepositories("techiesyed");
    expect(result).toEqual(repos);
    expect(axios.get).toHaveBeenCalled();
  });
});
