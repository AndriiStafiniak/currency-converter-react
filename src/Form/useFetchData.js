import { useState, useEffect } from 'react'

export const useFetchData = () => {
   const [ratesData, setRatesData] = useState({
      state: "loading",
      data: null,
   });

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_W4XgneKvCr75wX0qJDc8IGwz5j5Eg4wstpdf6tDQ`);

            if (!response.ok) {
               throw new Error(response.statusText);
            }

            const data = await response.json();

            console.log('Pobrane dane:', data);

            setRatesData({
               state: "success",
               data,
            });

         } catch (error) {
            console.error('Error fetching data:', error);
            setRatesData({
               state: "error",
               data: null,
            });
         }
      };

      setTimeout(fetchData, 2000);
   }, []);

   return { ratesData };
};
