import axios from 'axios';
import TokenService from './TokenService';

const instance = axios.create({
  baseURL: 'http://103.130.164.28:10060/',
  headers: {
    'Content-Type': 'application/json',
    'X-DeviceId': '118.0.5993.89',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    console.log(originalConfig);
    console.log(!originalConfig._retry);
    // console.log(err);
    // if (err.response) {
    //   console.log('222');
    //   // Access Token was expired
    //   if (
    //     err.response.status === 401 &&
    //     !originalConfig._retry &&
    //     !err.request.responseURL.includes('/api/auth/refresh')
    //   ) {
    //     try {
    //       const rs = await instance.post('/api/auth/refresh', {
    //         refreshToken: TokenService.getLocalRefreshToken(),
    //       });
    //       console.log(rs);

    //       const { accessToken, refreshToken } = rs.data;
    //       TokenService.updateToken(refreshToken, accessToken);

    //       instance.defaults.headers.common['Authorization'] =
    //         'Bearer ' + accessToken;

    //       return instance(originalConfig);
    //     } catch (_error) {
    //       if (_error.response && _error.response.data) {
    //         return Promise.reject(_error.response.data);
    //       }

    //       return Promise.reject(_error);
    //     }
    //   }
    if (err.response) {
      console.log(err);
      console.log(err.response);
      if (
        err.response.status === 401 &&
        !err.request.responseURL.includes('/api/auth/login')
      ) {
        try {
          const rs = await instance.post('/api/auth/refresh', {
            refreshToken: TokenService.getLocalRefreshToken(),
          });

          const { accessToken, refreshToken } = rs.data;
          TokenService.updateToken(refreshToken, accessToken);

          instance.defaults.headers.common['Authorization'] =
            'Bearer' + accessToken;

          return instance(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }
        }
      }
      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }

    // }

    return Promise.reject(err);
  },
);

export default instance;
