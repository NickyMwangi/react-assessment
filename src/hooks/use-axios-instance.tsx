import { useEffect, useState } from 'react';
import { AxiosInstance } from '../config';
import { getToken } from '../endpoints';

type axiosConfig = {
  method: 'head' | 'options' | 'put' | 'post' | 'patch' | 'delete' | 'get';
  url: string;
  requestConfig?: any;
};

export const useAxiosCrud = () => {
  const [response, setResponse] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [controller, setController] = useState<any>();
  const accessToken = getToken();

  const axiosCrud = async (configObj: axiosConfig) => {
    setIsLoading(true);
    const { method, url, requestConfig } = configObj;
    const control = new AbortController();
    try {
      setController(control);
      const resp = await AxiosInstance[method](url, {
        ...requestConfig
      });
      setError(null);
      setResponse(resp.data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err);
      setResponse([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //add token to the request
    const requestIntercept = AxiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) config.headers['Authorization'] = `Bearer ${accessToken}`;
        if (!config.headers['Content-Type']) config.headers['Content-Type'] = 'application/json';

        return config;
      },
      (error) => Promise.reject(error)
    );

    // add token to the response
    const responseIntercept = AxiosInstance.interceptors.response.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      AxiosInstance?.interceptors.request.eject(requestIntercept);
      AxiosInstance?.interceptors.response.eject(responseIntercept);
      controller && controller.abort();
    };
  }, [controller]);

  return { response, error, isLoading, axiosCrud };
};
