import axios from "axios";

// const BASE_URL = "http://localhost:3000/api/";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

  
// console.log(TOKEN);
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// .accessToken;
  
  
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken



// localStorage.setItem('ACCESS_TOKEN', TOKEN);


// const myToken = localStorage.getItem('ACCESS_TOKEN')



// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
// );

//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

