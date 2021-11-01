import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/',
});

axiosInstance.interceptors.request.use(
    (config) => {
      const token = null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    },
  );
  
  export default axiosInstance;
  