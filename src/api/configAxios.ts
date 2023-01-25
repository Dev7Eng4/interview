import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import { NavigateFunction } from "react-router-dom";
import qs from "qs";

// import { getSessionJWTAccessToken } from 'utils/session';
// import { ErrorResponse, ValidAxiosResponse } from './types/Response';
import React from "react";

interface RequestOptionsType {
  axiosOptions?: AxiosRequestConfig;
  useAuth?: boolean;
}

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URI}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setupInterceptor = (
  navigate: NavigateFunction,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      setLoading(true);
      return config;
    },
    (error: unknown) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    function (response: AxiosResponse) {
      if (response.status) {
        return response.data;
      }
      setLoading(false);
      return response;
    },
    (error: unknown) => {
      if (axios.isCancel(error)) {
        return null;
      }
      // @ts-ignore
      if (error.response?.status === 401) {
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
};

const mergeRequestConfig = ({ axiosOptions = {}, useAuth = true }: RequestOptionsType = {}) => ({
  ...axiosOptions,
  headers: {
    ...axiosOptions.headers,
    // Authorization: useAuth ? getSessionJWTAccessToken() : '',
  },
});

const encodePayload = (payload: any, headers?: AxiosRequestHeaders) => {
  if (!headers) {
    return payload;
  }
  if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
    return qs.stringify(payload);
  }
  return payload;
};

const axiosGet = async (url: string, options?: RequestOptionsType) => {
  return await axiosInstance.get(url, mergeRequestConfig(options));
};

// const axiosPost = async (
//   url: string,
//   payload: unknown,
//   options?: RequestOptionsType
// ): Promise<AxiosResponse<unknown>> => {
//   return await axiosInstance.post(
//     url,
//     encodePayload(payload, options?.axiosOptions?.headers),
//     mergeRequestConfig(options)
//   );
// };

const axiosPatch = async (url: string, payload: unknown, options?: RequestOptionsType) => {
  return axiosInstance.patch(url, payload, mergeRequestConfig(options));
};

const axiosDelete = async (url: string, options?: RequestOptionsType) => {
  return axiosInstance.delete(url, mergeRequestConfig(options));
};

// export { axiosGet, axiosPost, axiosPatch, axiosDelete };
