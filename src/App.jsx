import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [quotes, setQuotes] = useState([
    {
      quote:
        "My biggest fear is that people will attribute fake quotes to me and millions of morons on the internet will believe it.",
      name: "Albert Einstein",
    },
  ]);
  const [quote, setQuote] = useState([]);
  const [name, setName] = useState();

  const handleChange = (event) => {
    setQuote(event.target.value);
  };
  const addQuote = (event) => {
    event.preventDefault();
    setQuotes((quotes) => [{ quote, name }, ...quotes]);
    setQuote("");
    setName("");
  };

  return (
    <div className="App">
      <h1>Add a Famous Quote</h1>
      <form onSubmit={addQuote}>
        <textarea value={quote} onChange={handleChange} row={4}></textarea>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}></input>
        <button type="submit">Add Quote</button>
      </form>
      <h1>Famous Quotes:</h1>

      {quotes.map((quote) => {
        return (
          <div className="quote" key={quote.quote}>
            <p>{quote.quote}</p>- <span>{quote.name}</span>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
