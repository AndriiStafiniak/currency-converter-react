// import Form from "./Form"
import { useState } from "react"


function App() {

  const [name, setName] = useState("");
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(name);
    setName("");
  }
  return (
    <form onSubmit={onSubmitForm}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)} />

      <button>Wyslij</button>
      <p>{name}</p>

    </form>

    // <Form />
  );
}

export default App;
