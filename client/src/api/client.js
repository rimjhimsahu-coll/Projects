import axios from "axios";

// Accept either a Render service URL or a URL that already ends in /api.
// This avoids broken requests when the hosting URL is copied directly.
const configuredUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const normalizedUrl = configuredUrl.replace(/\/+$/, "");
const API_BASE = normalizedUrl.endsWith("/api")
  ? normalizedUrl
  : `${normalizedUrl}/api`;

const client = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

export default client;
