"use client";

import React, { useState } from "react";

function ConversorTemperatura() {
  const [valor, setValor] = useState("");
  const [conversion, setConversion] = useState("CtoF"); 
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    const numero = parseFloat(valor);
    if (isNaN(numero)) {
      setResultado("Por favor, ingresa un número válido.");
      return;
    }

    let res;
    if (conversion === "CtoF") {
      res = (numero * 9/5) + 32;
      setResultado(`${numero} °C = ${res.toFixed(2)} °F`);
    } else {
      res = (numero - 32) * 5/9;
      setResultado(`${numero} °F = ${res.toFixed(2)} °C`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Conversor de Temperatura</h2>
      <input
        type="text"
        placeholder="Ingresa la temperatura"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />

      <select
        value={conversion}
        onChange={(e) => setConversion(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      >
        <option value="CtoF">Celsius a Fahrenheit</option>
        <option value="FtoC">Fahrenheit a Celsius</option>
      </select>

      <div>
        <button onClick={convertir} style={{ marginTop: "10px", padding: "5px 15px" }}>
          Convertir
        </button>
      </div>

      {resultado && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{resultado}</p>}
    </div>
  );
}

export default ConversorTemperatura;
