import { useState } from "react";
import "./style.css";



const Form = () => {
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
