import { useState, useEffect } from 'react';

const useFetchData = (url, baseCurrency) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`${url}?base=${baseCurrency}`);
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
         } catch (error) {
            setError(error);
         } finally {
            setLoading(false);
         }
      };

      const timeout = setTimeout(() => {
         fetchData();
      }, 1000);

      return () => clearTimeout(timeout);
   }, [url, baseCurrency]);


   return { data, loading, error };
};

export default useFetchData;

