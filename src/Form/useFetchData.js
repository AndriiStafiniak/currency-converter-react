import { useState, useEffect } from 'react'

export const useFetchData = () => {
   const [ratesData, setRatesData] = useState({
      status: "loading",
      data: null,
   });

   const urlApi = "https://api.currencyapi.com/v3/latest?apikey=cur_live_W4XgneKvCr75wX0qJDc8IGwz5j5Eg4wstpdf6tDQ"

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(urlApi);

            if (!response.ok) {
               throw new Error(response.status.Text);
            }

            const data = await response.json();

            setRatesData({
               status: "success",
               data,
            });

         } catch (error) {
            setRatesData({
               status: "error",
               data: null,
            });
         }
      };

      setTimeout(fetchData, 2000);
   }, []);

   return { ratesData };
};
