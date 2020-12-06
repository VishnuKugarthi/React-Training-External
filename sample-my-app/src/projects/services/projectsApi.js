import axios from "axios";

const serviceEndPoint = "http://localhost:3030/projects";

async function getAll() {
  const response = await axios.get(serviceEndPoint);
  return response.data;
}

const projectsApi = { getAll };

export default projectsApi;
