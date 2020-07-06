import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://my-portfolio-b1ad0.firebaseio.com/",
});

export default axiosBase;
