import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

if (!baseURL) {
  throw new Error(
    "NEXT_PUBLIC_BASE_URL is not defined in environment variables"
  );
}

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
