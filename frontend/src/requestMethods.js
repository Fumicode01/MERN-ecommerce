import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser.accessToken || "";

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDNkOTUxN2MzMGE0ZTI3YjM4OWI3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTMwNjI1OCwiZXhwIjoxNjQxNTY1NDU4fQ.miMc4qWo5RwJ68DPCWGsZVcXVeZ3Li5iUgJL_WCSg1Q"

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});