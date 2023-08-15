import "./style.css"
const Form = (props) => (<form className="form">
   <fieldset className="form__fieldset">
      <legend className="form__legend">Currency converter</legend>
      <label className="form__label">
         Wpisz kwote w PLN:
         <input className=" form__input" type="number" name="euro" min="1" step="any" placeholder="Kwota w PLN"
            required />
      </label>
      <label>
         Wybierz walute:
         <select name="currency " className="form__select ">
            <option className="Euro" value="EUR">Euro €</option>
            <option className="Dolar" value="USD">Dolar $</option>
         </select>
      </label>
      <button className="form__button ">Oblicz</button>
      <p className="form__paragraph">Wynik:<span className="form__span">n/a</span></p>
   </fieldset>
</form>
)

export default Form;