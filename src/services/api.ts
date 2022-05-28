import axios from "axios"

import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

api.interceptors.response.use(function (response) {
  return response;
}, function (err) {
  toast.error("Houve um erro! Por favor, tente novamente.", {
    position: toast.POSITION.TOP_RIGHT
  });
  return Promise.reject(err);
});
