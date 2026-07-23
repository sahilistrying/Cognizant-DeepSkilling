import axios from "axios";
class GitClient {
  async getRepositories(username) {
    const response = await axios.get(
      `https:
    );
    return response.data;
  }
}
export default new GitClient();
