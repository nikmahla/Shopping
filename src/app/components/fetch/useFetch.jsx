import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);

      } catch (error) {
        console.log(error);

      }
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
