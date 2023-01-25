import axios from 'axios';
import { useEffect } from 'react';
import cacheStore from './cacheStore';

const MockService = () => {
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      if (cacheStore.get('mock-service-get')) {
        console.log('run cache');
        return cacheStore.get('mock-service-get');
      }

      console.log('fetching');
      const response = await axios.get(
        'https://5ebbd7c6f2cfeb001697d2bf.mockapi.io/api/v1/articles'
      );

      cacheStore.remember('mock-service-get', response.data);

      console.log('data', response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return <div>DEMO </div>;
};

export default MockService;
