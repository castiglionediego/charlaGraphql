
const setAuth = (axios, apiKey) => {
  axios.interceptors.request.use((request) => {
    request.headers['X-SAN-API-KEY'] = apiKey;
    return request;
  });
};

module.exports = {
  setAuth,
};
