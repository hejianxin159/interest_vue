import axios from "axios";



export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
      return config
  }, error => {
    return error
  });

  instance.interceptors.response.use(response => {
    return response.data ? response.data : response
  }, error => {
      alert(error.response.data.message);
      return {isFlush: true}
  });
  return instance(config)
}
