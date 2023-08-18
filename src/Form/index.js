import "./style.css";
import { useState } from "react";

const Form = () => {
   const [amount, setAmount] = useState("");
   const [currency, setCurrency] = useState("EUR");
   const [result, setResult] = useState(null);

   const currentExchangeRates = {
      EUR: 4.62,
      USD: 4.21,
      GBT: 5.21,
   };
   const onCurrencyChange = (event) => {
      setCurrency(event.target.value);
      setResult(null);
   };
   const onAmountChange = (event) => {
      setAmount(event.target.value);
      setResult(null);
   };

   const calculateResult = (currency, amount) => {
      return amount / currentExchangeRates[currency];
   };

   const updateResultText = () => {
      if (result != null) {
         return <p>{amount} {"PLN = "} {result.toFixed(2)} {currency}</p>;
      }
      return null;
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      let calculatedResult = calculateResult(currency, amount);
      setResult(calculatedResult);
   };

   return (
      <form onSubmit={onFormSubmit} className="form">
         <fieldset className="form__fieldset">
            <legend className="form__legend">Currency converter</legend>
            <label className="form__label">
               Wpisz kwotę w PLN:
               <input
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
               <select
                  className="js-currency"
                  value={currency}
                  onChange={onCurrencyChange}
               >
                  <option value="GBT">GBT</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
               </select>
            </label>
            <button
               type="submit"
               className="form__button">Oblicz</button>
            {updateResultText()}
         </fieldset>
      </form>
   );
};

export default Form;
