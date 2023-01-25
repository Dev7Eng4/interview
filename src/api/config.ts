import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';

interface RequestOptionsType {
  axiosOptions?: AxiosRequestConfig;
  useAuth?: boolean;
}

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setupInterceptor = (
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
      setLoading(false);
      if (response.status) {
        return response.data;
      }
      return response;
    },
    (error: unknown) => {
      if (axios.isCancel(error)) {
        return null;
      }
      // @ts-ignore
      if (error.response?.status === 401) {
        // redirect to login
      }
      return Promise.reject(error);
    }
  );
};
