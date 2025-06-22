import axios from "axios";

axios.create({
  baseURL: process.env.VITE_API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
});
