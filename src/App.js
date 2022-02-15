import { useState } from "react";
import "./App.css";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {
  const [antic, setAntic] = useState(0);
  const [operacio, setOperacio] = useState("");
  const [novaEntrada, setNovaEntrada] = useState(false);
  const [display, setDisplay] = useState(0);
  const entraNumero = (numero) => {
    if (novaEntrada) setDisplay(numero);
    else setDisplay(display * 10 + numero);
    setNovaEntrada(false);
  };

  const entraOperacio = (operacio) => {
    setNovaEntrada(true);
    setAntic(display);
    if (novaEntrada) calcular();
    setOperacio(operacio);
  };

  const calcular = () => {
    if (operacio === "+") setDisplay(antic + display);
    if (operacio === "-") setDisplay(antic - display);
  };

  return (
    <div className="Calculadora">
      <div className="Display">{display}</div>
      <div className="Numeros">
        {numeros.map((numero) => (
          <button onClick={() => entraNumero(numero)}>{numero}</button>
        ))}
        <button onClick={() => entraOperacio("+")}>+</button>
        <button onClick={() => entraOperacio("-")}>-</button>
      </div>
      <br />
      <div className="Resultat">
        <button onClick={calcular}>=</button>
      </div>
    </div>
  );
}

export default App;
