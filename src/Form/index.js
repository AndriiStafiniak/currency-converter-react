import { useState } from "react";
import { useFetchData } from './useFetchData';
import {
   StyledButton,
   StyledFieldset,
   StyledForm,
   StyledInput,
   StyledLegend,
   StyledResult,
   StyledSelect,
   StyledError,
   StyledLoading,
} from './styled';



const Form = (props) => {
   const { ratesData } = useFetchData();
   const [result, setResult] = useState(null);
   const [currency, setCurrency] = useState("EUR");
   const [amount, setAmount] = useState('');

   const calculatedResult = (amount, currency) => {
      const rate = ratesData.data.data[currency].value;

      setResult({
         sourceAmount: +amount,
         targetAmount: amount * rate,
         currency,
      });
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculatedResult(amount, currency)
   };

   return (
      <StyledForm onSubmit={onFormSubmit}>
         {ratesData.status === "loading" ? (
            <StyledLoading>
               Pobieranie kursów walut
            </StyledLoading>
         ) : ratesData.status === "error" ? (
            <StyledError>
               Ups, coś poszło nie tak...
            </StyledError>
         ) : (
            <StyledFieldset>
               <StyledLegend>Currency converter</StyledLegend>
               {props.children}
               <label>
                  Wpisz kwotę w USD:
                  <StyledInput
                     value={amount}
                     onChange={({ target }) => setAmount(target.value)}
                     className="form__input"
                     type="number"
                     min="1"
                     step="any"
                     placeholder="Kwota w USD"
                     required
                  />
               </label>
               <label>
                  Wybierz walutę:
                  <StyledSelect value={currency} onChange={(event) => setCurrency(event.target.value)}>

                     {Object.keys(ratesData.data.data).map(((currency) => (
                        <option key={currency} value={currency}>
                           {currency}
                        </option>
                     )))}
                  </StyledSelect>
               </label>
               <StyledButton type="submit">Oblicz</StyledButton>
               <StyledResult> Wynik: {result ? `${amount} USD = ${result.targetAmount.toFixed(2)} ${currency}` : "Brak wyniku"}</StyledResult>
            </StyledFieldset>
         )}
      </StyledForm>
   );
};

export default Form;
