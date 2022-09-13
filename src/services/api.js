import axios  from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080',
})

api.interceptors.request.use(async config => {
    // Declaramos um token manualmente para teste.
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6ZXZpdDByIiwiZXhwIjoxNjYzMDkxMTE0fQ.LxxsXc7WGsdxhva7-LCOH7yR1muhEXrBF5UNGIJzRdd0gFPcDMlbZa7dmdugd9tTPnofmrSooNofHJlaClN7gg";
  
    if (token) {
      api.defaults.headers.authorization = `Beare ${token}`;
    }
  
    return config;
  });