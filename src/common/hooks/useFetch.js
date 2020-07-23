import { useEffect } from 'react';
import octokitRequest from '../services/octokitRequest';

const useFetch = (auth, endpoint, dispatchCallback) => {

  useEffect(() => {
    if (!auth || !endpoint) {
      return;
    }

    const fetchData = async () => {
      const response = await octokitRequest(auth, endpoint);

      dispatchCallback(response.data);
    };

    fetchData();
  }, [auth, endpoint, dispatchCallback]);
};

export default useFetch;