import { useState, useEffect } from 'react';

const useFetchData = (url) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);


   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`${url}`);
            if (!response.ok) {
               throw new Error(response.statusText);
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
      }, 2000);

      return () => clearTimeout(timeout);
   }, [url]);


   return { data, loading, error };
};

export default useFetchData;

