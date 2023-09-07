import { useState } from "react";
import { StyledButton, StyledFieldset, StyledForm, StyledInput, StyledLegend, StyledResult, StyledSelect } from "./styled";

const Form = (props) => {
   const [amount, setAmount] = useState("");
   const [result, setResult] = useState(null);
   const [currency, setCurrency] = useState("EUR");

   const currencies = [
      {
         short: "EUR",
         label: "Euro",
         value: 4.47,
      },
      {
         short: "USD",
         label: "Dolar Amerykański",
         value: 4.11,
      },
      {
         short: "GBT",
         label: "Funt Brytyjski",
         value: 5.21,
      },
   ];

   const calculateResult = (amount, currencies) => {
      const selectedCurrencyValue =
         currencies.find(({ short }) => short === currency).value;
      return amount / selectedCurrencyValue;
   };

   const updateResultText = () => {
      if (result != null) {
         return <p>{amount} {"PLN = "} {result.toFixed(2)} {currency}</p>;
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
      let calculatedResult = calculateResult(amount, currencies);
      setResult(calculatedResult);
   };

   return (
      <StyledForm onSubmit={onFormSubmit} >

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
                  required />
            </label>

            <label>
               Wybierz walutę:
               <StyledSelect
                  onChange={onCurrencyChange}
               >
                  {
                     currencies.map
                        (
                           currency =>
                              <option value={currency.short} key={currency.short}>
                                 {currency.label}
                              </option>
                        )
                  }
               </StyledSelect>
            </label>

            <StyledButton
               type="submit"
            > Oblicz
            </StyledButton>
            <StyledResult>{"Wynik:"} {updateResultText()}</StyledResult>
         </StyledFieldset>
      </StyledForm>
   );
};

export default Form;
