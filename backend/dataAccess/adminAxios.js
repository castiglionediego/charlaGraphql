const axios = require('axios');
const https = require('https');
const { setAuth } = require('./authInterceptor');


const adminAxios = axios.create({
  baseURL:
    process.env.URL_RADAR_ADMIN ||
    'https://radar-admin-service-dev-adminapi.apps.ocp.ar.bsch/radar-admin',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

setAuth(
  adminAxios,
  process.env.ADMIN_SERVICE_API_KEY || 'qyEq5ArBtyRHhdK8d584Jt5V'
);

adminAxios.all = axios.all;

module.exports = adminAxios;
