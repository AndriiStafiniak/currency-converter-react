import { useState, useEffect, useMemo } from "react";
import useFetchData from './useFetchData';
import {
   StyledButton,
   StyledFieldset,
   StyledForm,
   StyledInput,
   StyledLegend,
   StyledResult,
   StyledSelect
} from './styled';

import { StyledError, StyledLoading } from "../UserMessages/styled";



const Form = (props) => {
   const [amount, setAmount] = useState('');
   const [result, setResult] = useState(null);
   const [currency, setCurrency] = useState('EUR');
   const [showResult, setShowResult] = useState(false);


   const apiKey = "5fc70fb0ff2999b3ede163b75aff5a99"
   const url = `http://data.fixer.io/api/latest?access_key=${apiKey}&base=EUR`



   const { data, loading, error } = useFetchData(url);


   const currencies = useMemo(() => data && data.rates ? Object.keys(data.rates) : [], [data]);


   useEffect(() => {
      if (data && currencies.length > 0) {
         const selectedCurrencyValue = data.rates[currency];
         const calculatedResult = amount * selectedCurrencyValue;
         setResult(calculatedResult);
      }
   }, [data, amount, currency, currencies]);

   const updateResultText = () => {
      if (result != null) {
         return (
            <p>
               {amount} EUR = {result.toFixed(2)} {currency}
            </p>
         );
      }
      return null;
   };

   const onCurrencyChange = ({ target }) => {
      setCurrency(target.value);
      setResult(null);
      setShowResult(false);
   };

   const onAmountChange = ({ target }) => {
      setAmount(target.value);
      setResult(null);
      setShowResult(false);
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      if (data && currencies.length > 0) {
         const selectedCurrencyValue = data.rates[currency];
         const calculatedResult = amount / selectedCurrencyValue;
         setResult(calculatedResult);
         setShowResult(true);
      }
   };

   return (
      <StyledForm onSubmit={onFormSubmit}>
         {loading && (
            <StyledLoading>
               Pobieranie kursów walut
            </StyledLoading>
         )}
         {error && (
            <StyledError>
               Ups, coś poszło nie tak. Sprawdź połączenie z internetem i odśwież stronę. Jeśli nadal nie działa, to wina leży po naszej stronie i już pracujemy nad rozwiązaniem. Spróbuj później! Przepraszamy!
            </StyledError>
         )}

         {!loading && !error && (
            <StyledFieldset>
               <StyledLegend>Currency converter</StyledLegend>
               {props.children}

               <label>
                  Wpisz kwotę w EURO:
                  <StyledInput
                     value={amount}
                     onChange={onAmountChange}
                     className="form__input"
                     type="number"
                     name="euro"
                     min="1"
                     step="any"
                     placeholder="Kwota w PLN"
                     required
                  />
               </label>

               <label>
                  Wybierz walutę:
                  <StyledSelect onChange={onCurrencyChange}>
                     {currencies.map((currency) => (
                        <option value={currency} key={currency}>
                           {currency}
                        </option>
                     ))}
                  </StyledSelect>
               </label>
               <StyledButton type="submit">Oblicz</StyledButton>
               {showResult && (<StyledResult>Wynik: {updateResultText()}</StyledResult>)}

            </StyledFieldset>
         )}
      </StyledForm>
   );
};

export default Form;