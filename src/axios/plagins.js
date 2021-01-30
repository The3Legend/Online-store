import axios from "axios";

export const HTTP = axios.create({
  baseURL: `http://95.217.16.207:1337/products`,
});
