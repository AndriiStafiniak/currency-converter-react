import { useState } from "react";
import "./style.css";



const Form = () => {
   const [amount, setAmount] = useState("");
   const [currency, setCurrency] = useState("EUR");
   const [result, setResult] = useState(null);

   const currentExchangeRates = {
      EUR: 4.47,
      USD: 4.11,
      GBT: 5.21,
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
                  className="form__select"
                  value={currency}
                  onChange={onCurrencyChange}
               >
                  <option value="GBT">Funt Brytyjski</option>
                  <option value="EUR">Euro</option>
                  <option value="USD">Dolar Amerykański</option>
               </select>
            </label>

            <button
               type="submit"
               className="form__button">Oblicz</button>
            <div className="form__result">{"Wynik:"} {updateResultText()} </div>
         </fieldset>

      </form>
   );
};


export default Form;
