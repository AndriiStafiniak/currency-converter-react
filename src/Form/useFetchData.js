import { useState, useEffect } from 'react';

const useFetchData = (apiUrl) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const url = '/api/latest';


   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`${apiUrl}`);
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
   }, [apiUrl]);


   return { data, loading, error };
};

export default useFetchData;

