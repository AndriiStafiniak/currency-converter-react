import { useState, useEffect } from "react";
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

const Form = (props) => {
   const [amount, setAmount] = useState('');
   const [result, setResult] = useState(null);
   const [currency, setCurrency] = useState('EUR');


   const apiUrl = 'https://api.exchangerate.host/latest';
   const baseCurrency = 'PLN';

   const { data, loading, error } = useFetchData(apiUrl, baseCurrency);

   const currencies = data ? Object.keys(data.rates) : [];

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
               {amount} PLN = {result.toFixed(2)} {currency}
            </p>
         );
      }
      return null;
   };

   const onCurrencyChange = ({ target }) => {
      setCurrency(target.value);
      setResult(null);
   };

   const onAmountChange = ({ target }) => {
      setAmount(target.value);
      setResult(null);
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      if (data && currencies.length > 0) {
         const selectedCurrencyValue = data.rates[currency];
         const calculatedResult = amount / selectedCurrencyValue;
         setResult(calculatedResult);
      }
   };

   return (
      <div>

         <StyledForm onSubmit={onFormSubmit}>
            <StyledFieldset>
               <StyledLegend>Currency converter</StyledLegend>
               {props.children}

               <label>
                  Wpisz kwotę w PLN:
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
               <StyledResult>Wynik: {updateResultText()}</StyledResult>
            </StyledFieldset>
         </StyledForm>
      </div>
   );
};

export default Form;
