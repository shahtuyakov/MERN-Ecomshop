import axios from "axios";

// const BASE_URL = "http://localhost:3000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI3NTAyNGEyMjhkOWIyMGQ2MWI5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Njc5OTUxMiwiZXhwIjoxNjQ3MjMxNTEyfQ.yOy6WcsZ82Yj2VrvxXUKpZHoLVbd6gpEt0pcshP6qpY"


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { token: `Bearer ${TOKEN}` },
});
