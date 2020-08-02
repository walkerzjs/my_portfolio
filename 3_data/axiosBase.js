import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "https://my-portfolio-b1ad0.firebaseio.com/",
});

export default axiosBase;

export const axiosReCaptcha = axios.create({
  baseURL: "https://www.google.com/recaptcha/api/siteverify",
});
