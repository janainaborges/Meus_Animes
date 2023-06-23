import axios from "axios";

const url = "https://kitsu.io/api/edge";

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});

export { api };